import unittest
from tlds.main import get_tlds, is_valid_tld, has_domain_valid_tld


class MyTestCase(unittest.TestCase):
    def test_get_tlds(self):
        self.assertEqual(len(get_tlds()) > 1400, True)

    def test_is_valid_tld(self):
        self.assertEqual(is_valid_tld("com"), True)

    def test_is_valid_tld_with_maj(self):
        self.assertEqual(is_valid_tld("cOm"), True)

    def test_is_invalid_tld(self):
        self.assertEqual(is_valid_tld("unavailabletld"), False)

    def test_has_domain_valid_tld(self):
        self.assertEqual(has_domain_valid_tld("test.com"), True)

    def test_has_domain_invalid_tld(self):
        self.assertEqual(has_domain_valid_tld("test.unavailabletld"), False)

    def test_has_domain_invalid_tld_empty_string(self):
        self.assertEqual(has_domain_valid_tld(""), False)


if __name__ == "__main__":
    unittest.main()
