#!/usr/bin/env python3
'''Simple pagination helper function'''
from typing import tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''
    Retrive starting and ending index
    '''
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return(start_index, end_index)
