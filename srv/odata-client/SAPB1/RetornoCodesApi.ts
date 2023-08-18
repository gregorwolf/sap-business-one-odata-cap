/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetornoCodes } from './RetornoCodes';
import { RetornoCodesRequestBuilder } from './RetornoCodesRequestBuilder';
import { BoBoeStatus } from './BoBoeStatus';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetornoCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetornoCodes<DeSerializersT>, DeSerializersT>
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
  ): RetornoCodesApi<DeSerializersT> {
    return new RetornoCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetornoCodes;

  requestBuilder(): RetornoCodesRequestBuilder<DeSerializersT> {
    return new RetornoCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetornoCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetornoCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetornoCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetornoCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetornoCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OCCURENCE_CODE: OrderableEdmTypeField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MOVEMENT_CODE: OrderableEdmTypeField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BOE_STATUS: EnumField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      BoBoeStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR: OrderableEdmTypeField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FILE_FORMAT: OrderableEdmTypeField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CODE: OrderableEdmTypeField<
      RetornoCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetornoCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link occurenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCURENCE_CODE: fieldBuilder.buildEdmTypeField(
          'OccurenceCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link movementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'MovementCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link boeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOE_STATUS: fieldBuilder.buildEnumField('BoeStatus', BoBoeStatus, true),
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
         * Static representation of the {@link color} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR: fieldBuilder.buildEdmTypeField('Color', 'Edm.Int32', true),
        /**
         * Static representation of the {@link fileFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_FORMAT: fieldBuilder.buildEdmTypeField(
          'FileFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CODE: fieldBuilder.buildEdmTypeField(
          'BankCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetornoCodes)
      };
    }

    return this._schema;
  }
}
