package com.genetic.algorithm.homepage;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sound.midi.MidiDevice.Info;

import com.genetic.algorithm.util.DBConnection;

/**
 * Servlet implementation class SearchPage
 */
public class SearchPage extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SearchPage() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String mode=request.getParameter("mode");
		if(mode.equals("1")){

			String SearchType=request.getParameter("searchType");
			String SearchString=request.getParameter("searchText");
			PrintWriter out=response.getWriter();
			String query="select v_id,v_name,c_name from v_info ";
			if(SearchType.equals("comp_name")){
				query+=" where c_name like '%"+SearchString+"%'";
			}else if(SearchType.equals("vehicle_name")){
				query+=" where v_name like '%"+SearchString+"%'";
			}
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
