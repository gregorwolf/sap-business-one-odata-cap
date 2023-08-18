/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StockTakings } from './StockTakings';
import { StockTakingsRequestBuilder } from './StockTakingsRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { WarehousesApi } from './WarehousesApi';
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
export class StockTakingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<StockTakings<DeSerializersT>, DeSerializersT>
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
  ): StockTakingsApi<DeSerializersT> {
    return new StockTakingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      StockTakings<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      StockTakings<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ItemsApi<DeSerializersT>, WarehousesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = StockTakings;

  requestBuilder(): StockTakingsRequestBuilder<DeSerializersT> {
    return new StockTakingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    StockTakings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<StockTakings<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<StockTakings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof StockTakings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(StockTakings, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ITEM_CODE: OrderableEdmTypeField<
      StockTakings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_CODE: OrderableEdmTypeField<
      StockTakings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTED: OrderableEdmTypeField<
      StockTakings<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_ZENTRALLAGER: OrderableEdmTypeField<
      StockTakings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      StockTakings<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      StockTakings<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<StockTakings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_CODE: fieldBuilder.buildEdmTypeField(
          'WarehouseCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link counted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED: fieldBuilder.buildEdmTypeField('Counted', 'Edm.Double', true),
        /**
         * Static representation of the {@link uZentrallager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ZENTRALLAGER: fieldBuilder.buildEdmTypeField(
          'U_Zentrallager',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', StockTakings)
      };
    }

    return this._schema;
  }
}
