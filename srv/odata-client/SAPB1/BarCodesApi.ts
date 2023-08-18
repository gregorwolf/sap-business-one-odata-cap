/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BarCodes } from './BarCodes';
import { BarCodesRequestBuilder } from './BarCodesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { UnitOfMeasurementsApi } from './UnitOfMeasurementsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BarCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BarCodes<DeSerializersT>, DeSerializersT>
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
  ): BarCodesApi<DeSerializersT> {
    return new BarCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      BarCodes<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      BarCodes<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemsApi<DeSerializersT>,
      UnitOfMeasurementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      UNIT_OF_MEASUREMENT: new OneToOneLink(
        'UnitOfMeasurement',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BarCodes;

  requestBuilder(): BarCodesRequestBuilder<DeSerializersT> {
    return new BarCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<BarCodes<DeSerializersT>, DeSerializersT> {
    return entityBuilder<BarCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BarCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BarCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BarCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      BarCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_NO: OrderableEdmTypeField<
      BarCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UO_M_ENTRY: OrderableEdmTypeField<
      BarCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      BarCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FREE_TEXT: OrderableEdmTypeField<
      BarCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      BarCodes<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      BarCodes<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BarCodes<DeSerializers>>;
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
         * Static representation of the {@link itemNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NO: fieldBuilder.buildEdmTypeField('ItemNo', 'Edm.String', true),
        /**
         * Static representation of the {@link uoMEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UO_M_ENTRY: fieldBuilder.buildEdmTypeField(
          'UoMEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('Barcode', 'Edm.String', true),
        /**
         * Static representation of the {@link freeText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_TEXT: fieldBuilder.buildEdmTypeField(
          'FreeText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BarCodes)
      };
    }

    return this._schema;
  }
}
