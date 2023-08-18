/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserObjectsMd } from './UserObjectsMd';
import { UserObjectsMdRequestBuilder } from './UserObjectsMdRequestBuilder';
import { UserTablesMdApi } from './UserTablesMdApi';
import { UserObjectMdChildTable } from './UserObjectMdChildTable';
import { UserObjectMdFindColumn } from './UserObjectMdFindColumn';
import { UserObjectMdFormColumn } from './UserObjectMdFormColumn';
import { UserObjectMdEnhancedFormColumn } from './UserObjectMdEnhancedFormColumn';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoUdoObjType } from './BoUdoObjType';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class UserObjectsMdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserObjectsMd<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): UserObjectsMdApi<DeSerializersT> {
    return new UserObjectsMdApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link userTablesMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_TABLES_MD: OneToOneLink<
      UserObjectsMd<DeSerializersT>,
      DeSerializersT,
      UserTablesMdApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [UserTablesMdApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      USER_TABLES_MD: new OneToOneLink('UserTablesMD', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = UserObjectsMd;

  requestBuilder(): UserObjectsMdRequestBuilder<DeSerializersT> {
    return new UserObjectsMdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserObjectsMd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserObjectsMd<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserObjectsMd<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserObjectsMd, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserObjectsMd, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TABLE_NAME: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOG_TABLE_NAME: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_CREATE_DEFAULT_FORM: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    OBJECT_TYPE: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoUdoObjType,
      true,
      true
    >;
    EXTENSION_NAME: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_CANCEL: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CAN_DELETE: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CAN_LOG: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MANAGE_SERIES: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CAN_FIND: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CAN_YEAR_TRANSFER: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_CLOSE: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    OVERWRITE_DLLFILE: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    USE_UNIQUE_FORM_TYPE: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CAN_ARCHIVE: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MENU_ITEM: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MENU_CAPTION: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FATHER_MENU_ID: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POSITION: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MENU_UID: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_ENHANCED_FORM: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REBUILD_ENHANCED_FORM: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FORM_SRF: OrderableEdmTypeField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLY_AUTHORIZATION: EnumField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    USER_OBJECT_MD_CHILD_TABLES: CollectionField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      UserObjectMdChildTable,
      true,
      true
    >;
    USER_OBJECT_MD_FIND_COLUMNS: CollectionField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      UserObjectMdFindColumn,
      true,
      true
    >;
    USER_OBJECT_MD_FORM_COLUMNS: CollectionField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      UserObjectMdFormColumn,
      true,
      true
    >;
    USER_OBJECT_MD_ENHANCED_FORM_COLUMNS: CollectionField<
      UserObjectsMd<DeSerializers>,
      DeSerializersT,
      UserObjectMdEnhancedFormColumn,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userTablesMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_TABLES_MD: OneToOneLink<
      UserObjectsMd<DeSerializersT>,
      DeSerializersT,
      UserTablesMdApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserObjectsMd<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link logTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'LogTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link canCreateDefaultForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_CREATE_DEFAULT_FORM: fieldBuilder.buildEnumField(
          'CanCreateDefaultForm',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link objectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_TYPE: fieldBuilder.buildEnumField(
          'ObjectType',
          BoUdoObjType,
          true
        ),
        /**
         * Static representation of the {@link extensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION_NAME: fieldBuilder.buildEdmTypeField(
          'ExtensionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link canCancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_CANCEL: fieldBuilder.buildEnumField('CanCancel', BoYesNoEnum, true),
        /**
         * Static representation of the {@link canDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_DELETE: fieldBuilder.buildEnumField('CanDelete', BoYesNoEnum, true),
        /**
         * Static representation of the {@link canLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_LOG: fieldBuilder.buildEnumField('CanLog', BoYesNoEnum, true),
        /**
         * Static representation of the {@link manageSeries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_SERIES: fieldBuilder.buildEnumField(
          'ManageSeries',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link canFind} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_FIND: fieldBuilder.buildEnumField('CanFind', BoYesNoEnum, true),
        /**
         * Static representation of the {@link canYearTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_YEAR_TRANSFER: fieldBuilder.buildEnumField(
          'CanYearTransfer',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link canClose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_CLOSE: fieldBuilder.buildEnumField('CanClose', BoYesNoEnum, true),
        /**
         * Static representation of the {@link overwriteDllfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERWRITE_DLLFILE: fieldBuilder.buildEnumField(
          'OverwriteDllfile',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link useUniqueFormType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_UNIQUE_FORM_TYPE: fieldBuilder.buildEnumField(
          'UseUniqueFormType',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link canArchive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_ARCHIVE: fieldBuilder.buildEnumField(
          'CanArchive',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link menuItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_ITEM: fieldBuilder.buildEnumField('MenuItem', BoYesNoEnum, true),
        /**
         * Static representation of the {@link menuCaption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_CAPTION: fieldBuilder.buildEdmTypeField(
          'MenuCaption',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fatherMenuId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FATHER_MENU_ID: fieldBuilder.buildEdmTypeField(
          'FatherMenuID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField('Position', 'Edm.Int32', true),
        /**
         * Static representation of the {@link menuUid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MENU_UID: fieldBuilder.buildEdmTypeField('MenuUID', 'Edm.String', true),
        /**
         * Static representation of the {@link enableEnhancedForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_ENHANCED_FORM: fieldBuilder.buildEnumField(
          'EnableEnhancedForm',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link rebuildEnhancedForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBUILD_ENHANCED_FORM: fieldBuilder.buildEnumField(
          'RebuildEnhancedForm',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link formSrf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_SRF: fieldBuilder.buildEdmTypeField('FormSRF', 'Edm.String', true),
        /**
         * Static representation of the {@link applyAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_AUTHORIZATION: fieldBuilder.buildEnumField(
          'ApplyAuthorization',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link userObjectMdChildTables} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_OBJECT_MD_CHILD_TABLES: fieldBuilder.buildCollectionField(
          'UserObjectMD_ChildTables',
          UserObjectMdChildTable,
          true
        ),
        /**
         * Static representation of the {@link userObjectMdFindColumns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_OBJECT_MD_FIND_COLUMNS: fieldBuilder.buildCollectionField(
          'UserObjectMD_FindColumns',
          UserObjectMdFindColumn,
          true
        ),
        /**
         * Static representation of the {@link userObjectMdFormColumns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_OBJECT_MD_FORM_COLUMNS: fieldBuilder.buildCollectionField(
          'UserObjectMD_FormColumns',
          UserObjectMdFormColumn,
          true
        ),
        /**
         * Static representation of the {@link userObjectMdEnhancedFormColumns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_OBJECT_MD_ENHANCED_FORM_COLUMNS: fieldBuilder.buildCollectionField(
          'UserObjectMD_EnhancedFormColumns',
          UserObjectMdEnhancedFormColumn,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserObjectsMd)
      };
    }

    return this._schema;
  }
}
