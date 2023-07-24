#!/usr/bin/env python3
'''Simple pagination helper function'''
from typing import tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''
    Retrive starting and ending index
    '''
    start = (page - 1) * page_size
    end = start + page_size
    return(start, end)
