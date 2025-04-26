CLASS lhc_Z_I_Product DEFINITION INHERITING FROM cl_abap_behavior_handler.
  PROTECTED SECTION.
    METHODS create_product REDEFINITION.
ENDCLASS.

CLASS lhc_Z_I_Product IMPLEMENTATION.
  METHOD create_product.
    LOOP AT entities INTO DATA(entity).
      " Set created_by and created_at if needed
      entity-created_by = sy-uname.
      entity-created_at = sy-datum && sy-uzeit.
      " Add business logic here if needed
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
