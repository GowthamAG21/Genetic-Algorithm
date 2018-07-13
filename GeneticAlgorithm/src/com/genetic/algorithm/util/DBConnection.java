package com.genetic.algorithm.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class DBConnection {
	
	public DBConnection(){
		
	}
	public static Connection getDbconncetion(Connection conn){
		try {
			
			Class.forName("com.mysql.jdbc.Driver");  
			conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/geneticalgorithm","root","root");
			if (conn != null) {	
				System.out.println("Connected");
			}
			else{
				System.out.println("Connection failed.....");  
			}
			return conn;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public static Connection creatDbconncetion(){
		try {
			
			Class.forName("com.mysql.jdbc.Driver");  
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/geneticalgorithm","root","root");
			if (conn != null) {	
				System.out.println("Connected");
			}
			else{
				System.out.println("Connection failed.....");  
			}
			return conn;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public static Statement getStatement(Connection connection) throws SQLException{
		if(connection!=null){
			return connection.createStatement();
		}
		return null;
	}
	
	public static boolean executeInsertQuery(String query) throws Exception{
		Connection conn = null;
		try{ 
         Statement st=getStatement(getDbconncetion(conn));
		 st.execute(query);
		 if(conn!=null)
		     conn.close();
		 return true;
	 	}catch(Exception e){
	 		if(conn!=null)
	 			conn.close();
	 	    e.printStackTrace();
	 	}
		return false;
	}
	
	
	public static boolean executeUpdateQuery(String query) throws Exception{
		Connection conn = null;
		try{ 
         Statement st=getStatement(getDbconncetion(conn));
		 st.executeUpdate(query);
		 if(conn!=null)
		     conn.close();
		 return true;
	 	}catch(Exception e){
	 		if(conn!=null)
	 			conn.close();
	 	    e.printStackTrace();
	 	}
		return false;
	}
	public static int executeInsertQuery(String query,boolean flag) throws Exception{
		Connection conn = null;
		try{ 
         Statement st=getStatement(getDbconncetion(conn));
		 st.executeUpdate(query,Statement.RETURN_GENERATED_KEYS);
		 ResultSet rs = st.getGeneratedKeys();
		 if ( rs.next() ) {
		     // Retrieve the auto generated key(s).
		     int key = rs.getInt(1);
		     if(conn!=null)
			     conn.close();
		     return key;
		 }
		 if(conn!=null)
		     conn.close();
		 return 0;
	 	}catch(Exception e){
	 		if(conn!=null)
	 			conn.close();
	 	    e.printStackTrace();
	 	}
		return 0;
	}
	public static boolean isAvaliable(String tablename,String condition,String valuetocheck) throws Exception{
		Connection conn = null;
		try{ 
         Statement st=getStatement(getDbconncetion(conn));
         ResultSet rs=st.executeQuery("select count(*) from "+tablename+" where "+condition+"='"+valuetocheck+"'");
		 while(rs.next()){
			 System.out.println(rs.getInt(1)+"count`");
			    if(rs.getInt(1)!=0){ 
			        rs.close();
				    st.close();
				    if(conn!=null) 
						 conn.close();
				    return true;
				 }
				
				 
		 }
		 if(conn!=null) 
			 conn.close();
		 return false;
	 	}catch(Exception e){
	 		if(conn!=null)
	 			conn.close();
	 	        e.printStackTrace();
	 	}
		return false;
	}
	
	public static int getRowCount(String table,String condition) throws Exception{
		Connection conn = null;
		int count=0;
		try{ 
            Statement st=getStatement(getDbconncetion(conn));
            ResultSet rs=st.executeQuery("select count(*) from "+table+" where "+condition);
            System.out.println("select count(*) from "+table+" where "+condition);
            while(rs.next()){
            	count = rs.getInt(1);
            }
	     }catch(Exception e){
	}
		return count;
	}

	public static JSONArray executeQueryToJSONArray(String xQuery , boolean  isNameKey ) throws Exception{
		Connection conn = null;
		JSONArray result = new JSONArray();
		if (isNameKey ){
			Statement st=getStatement(getDbconncetion(conn));
            //ResultSet rs=st.executeQuery("select count(*) from "+table+" where "+condition);
			ResultSet rst = st.executeQuery( xQuery );
			JSONObject row;
			int colIndex;
			int rowCount = 0;
			int colCount;
			colCount = rst.getMetaData().getColumnCount();
			while (rst.next()){
				row = new JSONObject();
				for ( colIndex=1; colIndex <= colCount; colIndex++){
					
					if(rst.getString(colIndex) != null && rst.getString(colIndex) != ""){
						if(rst.getMetaData().getColumnTypeName(colIndex).contains("float") && (rst.getString(colIndex)).indexOf(".")!=-1){
						  row.put(rst.getMetaData().getColumnName(colIndex),Float.toString(Float.parseFloat(rst.getString(colIndex))));
						}
						else
							row.put(rst.getMetaData().getColumnName(colIndex),rst.getString(colIndex));
					
					}
					else
						row.put(rst.getMetaData().getColumnName(colIndex),"");
				}
				result.put(rowCount++,row);
			}
			rst.close();
			rst = null;
			return result;
		}/*else{
			return executeQueryToJSONArray(xQuery);
		}*/
		return null;
	}
	
	public static HashMap<String, String> getHashMap(ResultSet rsset,String column) throws SQLException{
		HashMap<String, String> hmap=new HashMap<String,String>();
	       while(rsset.next()){
	    	   String data=rsset.getString(column);
	    		   hmap.put(data, data);
	    	   }
	       return hmap;
   }
}

