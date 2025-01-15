package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.regex.Pattern;

import org.junit.jupiter.api.Test;

public class test {
	@Test
	public void test1() {
		Pattern pattern = Pattern.compile("\\b(?<!릴리\\s*바이\\s*)레드", Pattern.MULTILINE);
//		assertEquals(true, pattern.matcher("쉬머 피니쉬").find());
//		assertEquals(true, pattern.matcher("쉬머 텍스처").find());
		assertEquals(false, pattern.matcher("릴리 바이 레드").find());
		//assertEquals(false, pattern.matcher("커버 이미지").find());
		
	}
}
