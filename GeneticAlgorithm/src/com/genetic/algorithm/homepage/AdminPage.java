package com.genetic.algorithm.homepage;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.genetic.algorithm.util.DBConnection;

public class AdminPage extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AdminPage() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher dispatcher = request.getRequestDispatcher("/index.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		try { 
			String v_type=request.getParameter("v_type");
			String v_name=request.getParameter("v_name");
			String c_name=request.getParameter("c_name");
			int v_price=Integer.parseInt(request.getParameter("v_price"));
			int v_h_mileage=Integer.parseInt(request.getParameter("v_h_mileage"));
			int v_horsepower=Integer.parseInt(request.getParameter("v_horsepower"));
			int v_c_mileage=Integer.parseInt(request.getParameter("v_c_mileage"));
			int v_enginesize=Integer.parseInt(request.getParameter("v_enginesize"));
			int v_num_stoke=Integer.parseInt(request.getParameter("v_num_stoke"));
			int v_num_cylinder=Integer.parseInt(request.getParameter("v_num_cylinder"));
			int v_fuel_capacity=Integer.parseInt(request.getParameter("v_fuel_capacity"));
			int v_length=Integer.parseInt(request.getParameter("v_length"));

			StringBuffer query=new StringBuffer();
			query.append("insert into v_info(v_type,v_name,c_name,v_price,v_h_mileage,v_horsepower,v_c_mileage,v_enginesize,v_num_stoke,v_num_cylinder,v_fuel_capacity,v_length) values ");
			query.append("('"+v_type+"',");
			query.append("'"+v_name+"',");
			query.append("'"+c_name+"',");
			query.append(""+v_price+",");
			query.append(""+v_h_mileage+",");
			query.append(""+v_horsepower+",");
			query.append(""+v_c_mileage+",");
			query.append(""+v_enginesize+",");
			query.append(""+v_num_stoke+",");
			query.append(""+v_num_cylinder+",");
			query.append(""+v_fuel_capacity+",");
			query.append(""+v_length+");");

			System.out.println(query);
			DBConnection.executeInsertQuery(query.toString()); 	

			out.println("Saved sucessfully");


		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			out.println("failed to save. try after sometime");
		}
	}

}
