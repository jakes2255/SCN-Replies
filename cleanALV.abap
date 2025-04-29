DATA(lv_value) = your_field.
REPLACE ALL OCCURRENCES OF REGEX '[^\x09\x0A\x0D\x20-\x7E]' IN lv_value WITH ''.
