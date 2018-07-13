package com.genetic.algorithm.homepage;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.genetic.algorithm.util.DBConnection;
import com.sun.corba.se.spi.orbutil.fsm.State;

/**
 * Servlet implementation class HomePage
 */
public class HomePage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HomePage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String mode=request.getParameter("mode");
		if(mode.equals("1")){
			
			String r_type=request.getParameter("r_type");
			String SearchType=request.getParameter("searchType");
			String[] splitdata=SearchType.split(" ");
			int min=0;
			int max=0;
			System.out.println(r_type);
			if(splitdata.length>0){
				SearchType=splitdata[0];
			}
			try {
			Connection conn = DBConnection.creatDbconncetion();
			Statement st=conn.createStatement();
		    ResultSet rs=st.executeQuery("select * from rulesset where v_type="+SearchType);
			while (rs.next()) {
				min=rs.getInt(r_type+"_1");
				max=rs.getInt(r_type+"_1");
			}
		    System.out.println("min===>"+min+"max===>"+max);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
			
			PrintWriter out=response.getWriter();
			String query="select v_id,v_name,c_name from v_info ";
				   query+=" where  v_type="+SearchType;
			
            System.out.println(query);
            
            
			try {
				out.write(DBConnection.executeQueryToJSONArray(query,true).toString());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else if(mode.equals("2")){
			System.out.println("coming to mode 2");
			String v_id=request.getParameter("v_id");
			String query="select *  from v_info where v_id="+v_id;
			PrintWriter out=response.getWriter();
			try {
				out.write(DBConnection.executeQueryToJSONArray(query,true).toString());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
