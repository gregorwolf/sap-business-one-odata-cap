/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalPrinter } from './FiscalPrinter';
import { FiscalPrinterRequestBuilder } from './FiscalPrinterRequestBuilder';
import { NfModelsApi } from './NfModelsApi';
import { PosDailySummaryApi } from './PosDailySummaryApi';
import { FiscalPrinterParams } from './FiscalPrinterParams';
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
  CollectionField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class FiscalPrinterApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalPrinter<DeSerializersT>, DeSerializersT>
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
  ): FiscalPrinterApi<DeSerializersT> {
    return new FiscalPrinterApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link nfModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_MODEL: OneToOneLink<
      FiscalPrinter<DeSerializersT>,
      DeSerializersT,
      NfModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link posDailySummary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POS_DAILY_SUMMARY: OneToManyLink<
      FiscalPrinter<DeSerializersT>,
      DeSerializersT,
      PosDailySummaryApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      NfModelsApi<DeSerializersT>,
      PosDailySummaryApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      NF_MODEL: new OneToOneLink('NFModel', this, linkedApis[0]),
      POS_DAILY_SUMMARY: new OneToManyLink(
        'POSDailySummary',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = FiscalPrinter;

  requestBuilder(): FiscalPrinterRequestBuilder<DeSerializersT> {
    return new FiscalPrinterRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalPrinter<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalPrinter<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FiscalPrinter<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FiscalPrinter, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FiscalPrinter, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EQUIPMENT_NO: OrderableEdmTypeField<
      FiscalPrinter<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL: OrderableEdmTypeField<
      FiscalPrinter<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUFACTURER_SERIAL_N: OrderableEdmTypeField<
      FiscalPrinter<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_NO: OrderableEdmTypeField<
      FiscalPrinter<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FISCAL_DOCUMENT_MODEL: OrderableEdmTypeField<
      FiscalPrinter<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_PRINTERS_PARAMS: CollectionField<
      FiscalPrinter<DeSerializers>,
      DeSerializersT,
      FiscalPrinterParams,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nfModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_MODEL: OneToOneLink<
      FiscalPrinter<DeSerializersT>,
      DeSerializersT,
      NfModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link posDailySummary} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POS_DAILY_SUMMARY: OneToManyLink<
      FiscalPrinter<DeSerializersT>,
      DeSerializersT,
      PosDailySummaryApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalPrinter<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link equipmentNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUIPMENT_NO: fieldBuilder.buildEdmTypeField(
          'EquipmentNo',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link model} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL: fieldBuilder.buildEdmTypeField('Model', 'Edm.String', true),
        /**
         * Static representation of the {@link manufacturerSerialN} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_SERIAL_N: fieldBuilder.buildEdmTypeField(
          'ManufacturerSerialN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registerNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_NO: fieldBuilder.buildEdmTypeField(
          'RegisterNo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_MODEL: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalPrintersParams} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_PRINTERS_PARAMS: fieldBuilder.buildCollectionField(
          'FiscalPrintersParams',
          FiscalPrinterParams,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalPrinter)
      };
    }

    return this._schema;
  }
}
