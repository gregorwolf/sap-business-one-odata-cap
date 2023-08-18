/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnitOfMeasurements } from './UnitOfMeasurements';
import { UnitOfMeasurementsRequestBuilder } from './UnitOfMeasurementsRequestBuilder';
import { ItemGroupsApi } from './ItemGroupsApi';
import { ItemsApi } from './ItemsApi';
import { BinLocationsApi } from './BinLocationsApi';
import { BarCodesApi } from './BarCodesApi';
import { UnitOfMeasurementGroupsApi } from './UnitOfMeasurementGroupsApi';
import { ProductionOrdersApi } from './ProductionOrdersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class UnitOfMeasurementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UnitOfMeasurements<DeSerializersT>, DeSerializersT>
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
  ): UnitOfMeasurementsApi<DeSerializersT> {
    return new UnitOfMeasurementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link barCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BAR_CODES: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      BarCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link unitOfMeasurementGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUPS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemGroupsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      BinLocationsApi<DeSerializersT>,
      BarCodesApi<DeSerializersT>,
      UnitOfMeasurementGroupsApi<DeSerializersT>,
      ProductionOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_GROUPS: new OneToManyLink('ItemGroups', this, linkedApis[0]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[1]),
      BIN_LOCATIONS: new OneToManyLink('BinLocations', this, linkedApis[2]),
      BAR_CODES: new OneToManyLink('BarCodes', this, linkedApis[3]),
      UNIT_OF_MEASUREMENT_GROUPS: new OneToManyLink(
        'UnitOfMeasurementGroups',
        this,
        linkedApis[4]
      ),
      PRODUCTION_ORDERS: new OneToManyLink(
        'ProductionOrders',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = UnitOfMeasurements;

  requestBuilder(): UnitOfMeasurementsRequestBuilder<DeSerializersT> {
    return new UnitOfMeasurementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UnitOfMeasurements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UnitOfMeasurements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UnitOfMeasurements<DeSerializersT>,
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
    typeof UnitOfMeasurements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UnitOfMeasurements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LENGTH_1: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LENGTH_1_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LENGTH_2: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LENGTH_2_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WIDTH_1: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WIDTH_1_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WIDTH_2: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WIDTH_2_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HEIGHT_1: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    HEIGHT_1_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HEIGHT_2: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    HEIGHT_2_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VOLUME_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WEIGHT_1: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WEIGHT_1_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WEIGHT_2: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WEIGHT_2_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    INTERNATIONAL_SYMBOL: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EWB_UNIT_ENTRY: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PP_WEIGHT_1: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PP_WE_1_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PP_WEIGHT_2: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    PP_WE_2_UNIT: OrderableEdmTypeField<
      UnitOfMeasurements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link barCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BAR_CODES: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      BarCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link unitOfMeasurementGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUPS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDERS: OneToManyLink<
      UnitOfMeasurements<DeSerializersT>,
      DeSerializersT,
      ProductionOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UnitOfMeasurements<DeSerializers>>;
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
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link length1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_1: fieldBuilder.buildEdmTypeField('Length1', 'Edm.Double', true),
        /**
         * Static representation of the {@link length1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Length1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link length2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_2: fieldBuilder.buildEdmTypeField('Length2', 'Edm.Double', true),
        /**
         * Static representation of the {@link length2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Length2Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link width1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_1: fieldBuilder.buildEdmTypeField('Width1', 'Edm.Double', true),
        /**
         * Static representation of the {@link width1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Width1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link width2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_2: fieldBuilder.buildEdmTypeField('Width2', 'Edm.Double', true),
        /**
         * Static representation of the {@link width2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Width2Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link height1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_1: fieldBuilder.buildEdmTypeField('Height1', 'Edm.Double', true),
        /**
         * Static representation of the {@link height1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Height1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link height2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_2: fieldBuilder.buildEdmTypeField('Height2', 'Edm.Double', true),
        /**
         * Static representation of the {@link height2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Height2Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link volume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME: fieldBuilder.buildEdmTypeField('Volume', 'Edm.Double', true),
        /**
         * Static representation of the {@link volumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link weight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_1: fieldBuilder.buildEdmTypeField('Weight1', 'Edm.Double', true),
        /**
         * Static representation of the {@link weight1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Weight1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link weight2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_2: fieldBuilder.buildEdmTypeField('Weight2', 'Edm.Double', true),
        /**
         * Static representation of the {@link weight2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Weight2Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link internationalSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InternationalSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ewbUnitEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWB_UNIT_ENTRY: fieldBuilder.buildEdmTypeField(
          'EWBUnitEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link ppWeight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PP_WEIGHT_1: fieldBuilder.buildEdmTypeField(
          'PPWeight1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link ppWe1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PP_WE_1_UNIT: fieldBuilder.buildEdmTypeField(
          'PPWe1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link ppWeight2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PP_WEIGHT_2: fieldBuilder.buildEdmTypeField(
          'PPWeight2',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link ppWe2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PP_WE_2_UNIT: fieldBuilder.buildEdmTypeField(
          'PPWe2Unit',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UnitOfMeasurements)
      };
    }

    return this._schema;
  }
}
