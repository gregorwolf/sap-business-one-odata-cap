/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserTablesMd } from './UserTablesMd';
import { UserTablesMdRequestBuilder } from './UserTablesMdRequestBuilder';
import { UserFieldsMdApi } from './UserFieldsMdApi';
import { UserObjectsMdApi } from './UserObjectsMdApi';
import { BoUtbTableType } from './BoUtbTableType';
import { BoYesNoEnum } from './BoYesNoEnum';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class UserTablesMdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserTablesMd<DeSerializersT>, DeSerializersT>
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
  ): UserTablesMdApi<DeSerializersT> {
    return new UserTablesMdApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link userFieldsMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_FIELDS_MD: OneToManyLink<
      UserTablesMd<DeSerializersT>,
      DeSerializersT,
      UserFieldsMdApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userObjectsMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_OBJECTS_MD: OneToManyLink<
      UserTablesMd<DeSerializersT>,
      DeSerializersT,
      UserObjectsMdApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UserFieldsMdApi<DeSerializersT>,
      UserObjectsMdApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      USER_FIELDS_MD: new OneToManyLink('UserFieldsMD', this, linkedApis[0]),
      USER_OBJECTS_MD: new OneToManyLink('UserObjectsMD', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = UserTablesMd;

  requestBuilder(): UserTablesMdRequestBuilder<DeSerializersT> {
    return new UserTablesMdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserTablesMd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserTablesMd<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserTablesMd<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserTablesMd, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserTablesMd, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TABLE_NAME: OrderableEdmTypeField<
      UserTablesMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_DESCRIPTION: OrderableEdmTypeField<
      UserTablesMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TABLE_TYPE: EnumField<
      UserTablesMd<DeSerializers>,
      DeSerializersT,
      BoUtbTableType,
      true,
      true
    >;
    ARCHIVABLE: EnumField<
      UserTablesMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ARCHIVE_DATE_FIELD: OrderableEdmTypeField<
      UserTablesMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_MENU: EnumField<
      UserTablesMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    APPLY_AUTHORIZATION: EnumField<
      UserTablesMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userFieldsMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_FIELDS_MD: OneToManyLink<
      UserTablesMd<DeSerializersT>,
      DeSerializersT,
      UserFieldsMdApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userObjectsMd} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_OBJECTS_MD: OneToManyLink<
      UserTablesMd<DeSerializersT>,
      DeSerializersT,
      UserObjectsMdApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserTablesMd<DeSerializers>>;
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
          false
        ),
        /**
         * Static representation of the {@link tableDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TableDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tableType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_TYPE: fieldBuilder.buildEnumField(
          'TableType',
          BoUtbTableType,
          true
        ),
        /**
         * Static representation of the {@link archivable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARCHIVABLE: fieldBuilder.buildEnumField(
          'Archivable',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link archiveDateField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARCHIVE_DATE_FIELD: fieldBuilder.buildEdmTypeField(
          'ArchiveDateField',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayMenu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_MENU: fieldBuilder.buildEnumField(
          'DisplayMenu',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link applyAuthorization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_AUTHORIZATION: fieldBuilder.buildEnumField(
          'ApplyAuthorization',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserTablesMd)
      };
    }

    return this._schema;
  }
}
