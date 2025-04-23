CLASS zcl_matdoc_confirm_handler DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES zif_matdoc_create_confirm_out.
ENDCLASS.

CLASS zcl_matdoc_confirm_handler IMPLEMENTATION.

  METHOD zif_matdoc_create_confirm_out~material_document_create_conf_out.
    " Handle confirmation
    LOOP AT input-material_document_create_confirmation INTO DATA(ls_confirm).
      WRITE: / 'Material Document Created:', ls_confirm-material_document.
      " Save to DB or update status here
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
