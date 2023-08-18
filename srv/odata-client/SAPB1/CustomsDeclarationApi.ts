/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomsDeclaration } from './CustomsDeclaration';
import { CustomsDeclarationRequestBuilder } from './CustomsDeclarationRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class CustomsDeclarationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomsDeclaration<DeSerializersT>, DeSerializersT>
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
  ): CustomsDeclarationApi<DeSerializersT> {
    return new CustomsDeclarationApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomsDeclaration;

  requestBuilder(): CustomsDeclarationRequestBuilder<DeSerializersT> {
    return new CustomsDeclarationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomsDeclaration<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomsDeclaration<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomsDeclaration<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CustomsDeclaration,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomsDeclaration,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CCD_NUM: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CUSTOMS_BROKER: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOC_DATE: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SUPPLY_NUM: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLY_DATE: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CUSTOMS_TERMINAL: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_KEY: OrderableEdmTypeField<
      CustomsDeclaration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomsDeclaration<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ccdNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CCD_NUM: fieldBuilder.buildEdmTypeField('CCDNum', 'Edm.String', false),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link customsBroker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_BROKER: fieldBuilder.buildEdmTypeField(
          'CustomsBroker',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.String', true),
        /**
         * Static representation of the {@link docDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_DATE: fieldBuilder.buildEdmTypeField(
          'DocDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link supplyNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLY_NUM: fieldBuilder.buildEdmTypeField(
          'SupplyNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLY_DATE: fieldBuilder.buildEdmTypeField(
          'SupplyDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link customsTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_TERMINAL: fieldBuilder.buildEdmTypeField(
          'CustomsTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_KEY: fieldBuilder.buildEdmTypeField(
          'PaymentKey',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomsDeclaration)
      };
    }

    return this._schema;
  }
}
