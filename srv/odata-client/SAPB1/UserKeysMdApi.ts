/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserKeysMd } from './UserKeysMd';
import { UserKeysMdRequestBuilder } from './UserKeysMdRequestBuilder';
import { UserKeysMdElement } from './UserKeysMdElement';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class UserKeysMdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserKeysMd<DeSerializersT>, DeSerializersT>
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
  ): UserKeysMdApi<DeSerializersT> {
    return new UserKeysMdApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UserKeysMd;

  requestBuilder(): UserKeysMdRequestBuilder<DeSerializersT> {
    return new UserKeysMdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserKeysMd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserKeysMd<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserKeysMd<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserKeysMd, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserKeysMd, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TABLE_NAME: OrderableEdmTypeField<
      UserKeysMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY_INDEX: OrderableEdmTypeField<
      UserKeysMd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    KEY_NAME: OrderableEdmTypeField<
      UserKeysMd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE: EnumField<
      UserKeysMd<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    USER_KEYS_MD_ELEMENTS: CollectionField<
      UserKeysMd<DeSerializers>,
      DeSerializersT,
      UserKeysMdElement,
      true,
      true
    >;
    ALL_FIELDS: AllFields<UserKeysMd<DeSerializers>>;
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
         * Static representation of the {@link keyIndex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_INDEX: fieldBuilder.buildEdmTypeField(
          'KeyIndex',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link keyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_NAME: fieldBuilder.buildEdmTypeField('KeyName', 'Edm.String', true),
        /**
         * Static representation of the {@link unique} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE: fieldBuilder.buildEnumField('Unique', BoYesNoEnum, true),
        /**
         * Static representation of the {@link userKeysMdElements} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_KEYS_MD_ELEMENTS: fieldBuilder.buildCollectionField(
          'UserKeysMD_Elements',
          UserKeysMdElement,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserKeysMd)
      };
    }

    return this._schema;
  }
}
