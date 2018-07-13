package com.genetic.algorithm.homepage;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.genetic.algorithm.util.DBConnection;

/**
 * Servlet implementation class RulesSet
 */
public class RulesSet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RulesSet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int v_price_1=Integer.parseInt(request.getParameter("v_price_1"));
		int v_price_2=Integer.parseInt(request.getParameter("v_price_2"));
		int v_h_mileage_1=Integer.parseInt(request.getParameter("v_h_mileage_1"));
		int v_h_mileage_2=Integer.parseInt(request.getParameter("v_h_mileage_2"));
		int v_h_power_1=Integer.parseInt(request.getParameter("v_h_power_1"));
		int v_h_power_2=Integer.parseInt(request.getParameter("v_h_power_2"));
		int v_c_mileage_1=Integer.parseInt(request.getParameter("v_c_mileage_1"));
		int v_c_mileage_2=Integer.parseInt(request.getParameter("v_c_mileage_2"));
		int v_e_size_1=Integer.parseInt(request.getParameter("v_e_size_1"));
		int v_e_size_2=Integer.parseInt(request.getParameter("v_e_size_2"));
		int v_num_stoke_1=Integer.parseInt(request.getParameter("v_num_stoke_1"));
		int v_num_stoke_2=Integer.parseInt(request.getParameter("v_num_stoke_2"));
		int v_num_cylinder_1=Integer.parseInt(request.getParameter("v_num_cylinder_1"));
		int v_num_cylinder_2=Integer.parseInt(request.getParameter("v_num_cylinder_2"));
		int v_fuel_capacity_1=Integer.parseInt(request.getParameter("v_fuel_capacity_1"));
		int v_fuel_capacity_2=Integer.parseInt(request.getParameter("v_fuel_capacity_2"));
		int v_length_1=Integer.parseInt(request.getParameter("v_length_1"));
		int v_length_2=Integer.parseInt(request.getParameter("v_length_2"));
		String v_type=request.getParameter("v_type");
		int type=0;
		if(v_type.equals("2wheeler")){
			type=2;
		}else if(v_type.equals("3wheeler")){
			type=3;
		}else if(v_type.equals("4wheeler")){
			type=4;
		}
		
		String query ="update rulesset set "+
		              "v_type="+type+","+
		              "v_price_1="+v_price_1+","+
		              "v_price_2="+v_price_2+","+
		              "v_h_mileage_1="+v_h_mileage_1+","+
		              "v_h_mileage_2="+v_h_mileage_2+","+
		              "v_h_power_1="+v_h_power_1+","+
		              "v_h_power_2="+v_h_power_2+","+
		              "v_c_mileage_1="+v_c_mileage_1+","+
		              "v_c_mileage_2="+v_c_mileage_2+","+
		              "v_e_size_1="+v_e_size_1+","+
		              "v_e_size_2="+v_e_size_2+","+
		              "v_num_stoke_1="+v_num_stoke_1+","+
		              "v_num_stoke_2="+v_num_stoke_2+","+
		              "v_num_cylinder_1="+v_num_cylinder_1+","+
		              "v_num_cylinder_2="+v_num_cylinder_2+","+
		              "v_fuel_capacity_1="+v_fuel_capacity_1+","+
		              "v_fuel_capacity_2="+v_fuel_capacity_2+","+
		              "v_length_1="+v_length_1+","+
		              "v_length_2="+v_length_2+
		              " where v_type="+type;

		System.out.println(query);
		try {
			DBConnection.executeUpdateQuery(query.toString());
		} catch (Exception e) {
			e.printStackTrace();
		} 
		
		PrintWriter out = response.getWriter();
		out.println("Saved sucessfully");
		
		
		
	}

}
