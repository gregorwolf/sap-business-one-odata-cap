/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BinLocations } from './BinLocations';
import { BinLocationsRequestBuilder } from './BinLocationsRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { ItemsApi } from './ItemsApi';
import { ItemGroupsApi } from './ItemGroupsApi';
import { WeightMeasuresApi } from './WeightMeasuresApi';
import { UnitOfMeasurementsApi } from './UnitOfMeasurementsApi';
import { UnitOfMeasurementGroupsApi } from './UnitOfMeasurementGroupsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BinRestrictItemEnum } from './BinRestrictItemEnum';
import { BinRestrictionBatchEnum } from './BinRestrictionBatchEnum';
import { BinRestrictTransactionEnum } from './BinRestrictTransactionEnum';
import { BinRestrictUoMEnum } from './BinRestrictUoMEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BinLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BinLocations<DeSerializersT>, DeSerializersT>
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
  ): BinLocationsApi<DeSerializersT> {
    return new BinLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link weightMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WEIGHT_MEASURE: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      WeightMeasuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurementGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      ItemGroupsApi<DeSerializersT>,
      WeightMeasuresApi<DeSerializersT>,
      UnitOfMeasurementsApi<DeSerializersT>,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSES: new OneToManyLink('Warehouses', this, linkedApis[0]),
      WAREHOUSE_2: new OneToOneLink('Warehouse2', this, linkedApis[1]),
      ITEM: new OneToOneLink('Item', this, linkedApis[2]),
      ITEM_GROUPS: new OneToOneLink('ItemGroups', this, linkedApis[3]),
      WEIGHT_MEASURE: new OneToOneLink('WeightMeasure', this, linkedApis[4]),
      UNIT_OF_MEASUREMENT: new OneToOneLink(
        'UnitOfMeasurement',
        this,
        linkedApis[5]
      ),
      UNIT_OF_MEASUREMENT_GROUP: new OneToOneLink(
        'UnitOfMeasurementGroup',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = BinLocations;

  requestBuilder(): BinLocationsRequestBuilder<DeSerializersT> {
    return new BinLocationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BinLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BinLocations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BinLocations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BinLocations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BinLocations, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBLEVEL_1: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBLEVEL_2: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBLEVEL_3: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBLEVEL_4: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIN_CODE: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_SORT_CODE: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_1: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_2: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_3: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_4: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_5: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_6: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_7: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_8: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_9: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_10: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICTED_ITEM_TYPE: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BinRestrictItemEnum,
      true,
      true
    >;
    SPECIFIC_ITEM: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIFIC_ITEM_GROUP: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BATCH_RESTRICTIONS: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BinRestrictionBatchEnum,
      true,
      true
    >;
    RESTRICTED_TRANS_TYPE: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BinRestrictTransactionEnum,
      true,
      true
    >;
    RESTRICTION_REASON: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_RESTRICTION_CHANGED: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MINIMUM_QTY: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAXIMUM_QTY: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    IS_SYSTEM_BIN: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RECEIVING_BIN_LOCATION: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    EXCLUDE_AUTO_ALLOC_ON_ISSUE: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MAXIMUM_WEIGHT: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAXIMUM_WEIGHT_1: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAXIMUM_WEIGHT_UNIT: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MAXIMUM_WEIGHT_UNIT_1: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RESTRICTED_UO_M_TYPE: EnumField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      BinRestrictUoMEnum,
      true,
      true
    >;
    SPECIFIC_UO_M: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SPECIFIC_UO_M_GROUP: OrderableEdmTypeField<
      BinLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSES: OneToManyLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link weightMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WEIGHT_MEASURE: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      WeightMeasuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurementGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT_GROUP: OneToOneLink<
      BinLocations<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BinLocations<DeSerializers>>;
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
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sublevel1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEVEL_1: fieldBuilder.buildEdmTypeField(
          'Sublevel1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sublevel2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEVEL_2: fieldBuilder.buildEdmTypeField(
          'Sublevel2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sublevel3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEVEL_3: fieldBuilder.buildEdmTypeField(
          'Sublevel3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sublevel4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBLEVEL_4: fieldBuilder.buildEdmTypeField(
          'Sublevel4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link binCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIN_CODE: fieldBuilder.buildEdmTypeField('BinCode', 'Edm.String', true),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
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
         * Static representation of the {@link alternativeSortCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_SORT_CODE: fieldBuilder.buildEdmTypeField(
          'AlternativeSortCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
        /**
         * Static representation of the {@link attribute1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_1: fieldBuilder.buildEdmTypeField(
          'Attribute1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_2: fieldBuilder.buildEdmTypeField(
          'Attribute2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_3: fieldBuilder.buildEdmTypeField(
          'Attribute3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_4: fieldBuilder.buildEdmTypeField(
          'Attribute4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_5: fieldBuilder.buildEdmTypeField(
          'Attribute5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_6: fieldBuilder.buildEdmTypeField(
          'Attribute6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_7: fieldBuilder.buildEdmTypeField(
          'Attribute7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_8: fieldBuilder.buildEdmTypeField(
          'Attribute8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_9: fieldBuilder.buildEdmTypeField(
          'Attribute9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attribute10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_10: fieldBuilder.buildEdmTypeField(
          'Attribute10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link restrictedItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTED_ITEM_TYPE: fieldBuilder.buildEnumField(
          'RestrictedItemType',
          BinRestrictItemEnum,
          true
        ),
        /**
         * Static representation of the {@link specificItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_ITEM: fieldBuilder.buildEdmTypeField(
          'SpecificItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specificItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'SpecificItemGroup',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link batchRestrictions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH_RESTRICTIONS: fieldBuilder.buildEnumField(
          'BatchRestrictions',
          BinRestrictionBatchEnum,
          true
        ),
        /**
         * Static representation of the {@link restrictedTransType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTED_TRANS_TYPE: fieldBuilder.buildEnumField(
          'RestrictedTransType',
          BinRestrictTransactionEnum,
          true
        ),
        /**
         * Static representation of the {@link restrictionReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTION_REASON: fieldBuilder.buildEdmTypeField(
          'RestrictionReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateRestrictionChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_RESTRICTION_CHANGED: fieldBuilder.buildEdmTypeField(
          'DateRestrictionChanged',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link minimumQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_QTY: fieldBuilder.buildEdmTypeField(
          'MinimumQty',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maximumQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_QTY: fieldBuilder.buildEdmTypeField(
          'MaximumQty',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link isSystemBin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYSTEM_BIN: fieldBuilder.buildEnumField(
          'IsSystemBin',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link receivingBinLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_BIN_LOCATION: fieldBuilder.buildEnumField(
          'ReceivingBinLocation',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link excludeAutoAllocOnIssue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_AUTO_ALLOC_ON_ISSUE: fieldBuilder.buildEnumField(
          'ExcludeAutoAllocOnIssue',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link maximumWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_WEIGHT: fieldBuilder.buildEdmTypeField(
          'MaximumWeight',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maximumWeight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_WEIGHT_1: fieldBuilder.buildEdmTypeField(
          'MaximumWeight1',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maximumWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'MaximumWeightUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link maximumWeightUnit1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_WEIGHT_UNIT_1: fieldBuilder.buildEdmTypeField(
          'MaximumWeightUnit1',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link restrictedUoMType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICTED_UO_M_TYPE: fieldBuilder.buildEnumField(
          'RestrictedUoMType',
          BinRestrictUoMEnum,
          true
        ),
        /**
         * Static representation of the {@link specificUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_UO_M: fieldBuilder.buildEdmTypeField(
          'SpecificUoM',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link specificUoMGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_UO_M_GROUP: fieldBuilder.buildEdmTypeField(
          'SpecificUoMGroup',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BinLocations)
      };
    }

    return this._schema;
  }
}
