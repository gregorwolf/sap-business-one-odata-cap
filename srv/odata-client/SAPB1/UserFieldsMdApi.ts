/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserFieldsMd } from './UserFieldsMd';
import { UserFieldsMdRequestBuilder } from './UserFieldsMdRequestBuilder';
import { UserTablesMdApi } from './UserTablesMdApi';
import { ValidValueMd } from './ValidValueMd';
import { BoFieldTypes } from './BoFieldTypes';
import { BoFldSubTypes } from './BoFldSubTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { UdfLinkedSystemObjectTypesEnum } from './UdfLinkedSystemObjectTypesEnum';
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
export class UserFieldsMdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserFieldsMd<DeSerializersT>, DeSerializersT>
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
  ): UserFieldsMdApi<DeSerializersT> {
    return new UserFieldsMdApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link userTablesMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_TABLES_MD: OneToOneLink<
      UserFieldsMd<DeSerializersT>,
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

  entityConstructor = UserFieldsMd;

  requestBuilder(): UserFieldsMdRequestBuilder<DeSerializersT> {
    return new UserFieldsMdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserFieldsMd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserFieldsMd<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserFieldsMd<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserFieldsMd, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserFieldsMd, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      BoFieldTypes,
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_TYPE: EnumField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      BoFldSubTypes,
      true,
      true
    >;
    LINKED_TABLE: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_VALUE: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_ID: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EDIT_SIZE: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MANDATORY: EnumField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LINKED_UDO: OrderableEdmTypeField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINKED_SYSTEM_OBJECT: EnumField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      UdfLinkedSystemObjectTypesEnum,
      true,
      true
    >;
    VALID_VALUES_MD: CollectionField<
      UserFieldsMd<DeSerializers>,
      DeSerializersT,
      ValidValueMd,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userTablesMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_TABLES_MD: OneToOneLink<
      UserFieldsMd<DeSerializersT>,
      DeSerializersT,
      UserTablesMdApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserFieldsMd<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', BoFieldTypes, true),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.Int32', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_TYPE: fieldBuilder.buildEnumField('SubType', BoFldSubTypes, true),
        /**
         * Static representation of the {@link linkedTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_TABLE: fieldBuilder.buildEdmTypeField(
          'LinkedTable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_ID: fieldBuilder.buildEdmTypeField('FieldID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link editSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDIT_SIZE: fieldBuilder.buildEdmTypeField(
          'EditSize',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link mandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANDATORY: fieldBuilder.buildEnumField('Mandatory', BoYesNoEnum, true),
        /**
         * Static representation of the {@link linkedUdo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_UDO: fieldBuilder.buildEdmTypeField(
          'LinkedUDO',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linkedSystemObject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_SYSTEM_OBJECT: fieldBuilder.buildEnumField(
          'LinkedSystemObject',
          UdfLinkedSystemObjectTypesEnum,
          true
        ),
        /**
         * Static representation of the {@link validValuesMd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_VALUES_MD: fieldBuilder.buildCollectionField(
          'ValidValuesMD',
          ValidValueMd,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserFieldsMd)
      };
    }

    return this._schema;
  }
}
