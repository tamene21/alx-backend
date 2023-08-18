#!/usr/bin/python3
""" 0. Basic dictionary
"""


BaseCaching = __import__("base_caching").BaseCaching


class BasicCache(BaseCaching):
    """Inherits from BaseCaching.
    """

    def put(self, key, item):
        """ Must assign to the dictionary self.
        If key or item is None, this method should not do anything
        """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """ Return the value in self.cache_data linked to key.
        """
        return self.cache_data.get(key, None)
