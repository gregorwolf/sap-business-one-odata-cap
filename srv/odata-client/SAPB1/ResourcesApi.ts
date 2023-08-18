/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Resources } from './Resources';
import { ResourcesRequestBuilder } from './ResourcesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { ResourceCapacitiesApi } from './ResourceCapacitiesApi';
import { ResourceGroupsApi } from './ResourceGroupsApi';
import { ResourceWarehouse } from './ResourceWarehouse';
import { ResourceFixedAsset } from './ResourceFixedAsset';
import { ResourceEmployee } from './ResourceEmployee';
import { ResourceDailyCapacity } from './ResourceDailyCapacity';
import { ResourceTypeEnum } from './ResourceTypeEnum';
import { ResourceIssueMethodEnum } from './ResourceIssueMethodEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ResourceAllocationEnum } from './ResourceAllocationEnum';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Resources<DeSerializersT>, DeSerializersT>
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
  ): ResourcesApi<DeSerializersT> {
    return new ResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resourceCapacities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CAPACITIES: OneToManyLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ResourceCapacitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_GROUP: OneToOneLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ResourceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemsApi<DeSerializersT>,
      ResourceCapacitiesApi<DeSerializersT>,
      ResourceGroupsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0]),
      RESOURCE_CAPACITIES: new OneToManyLink(
        'ResourceCapacities',
        this,
        linkedApis[1]
      ),
      RESOURCE_GROUP: new OneToOneLink('ResourceGroup', this, linkedApis[2]),
      ITEM: new OneToOneLink('Item', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = Resources;

  requestBuilder(): ResourcesRequestBuilder<DeSerializersT> {
    return new ResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Resources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Resources<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Resources<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Resources, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Resources, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VIS_CODE: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CODE_BAR: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOREIGN_NAME: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      ResourceTypeEnum,
      true,
      true
    >;
    GROUP: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_METHOD: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      ResourceIssueMethodEnum,
      true,
      true
    >;
    COST_1: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_2: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_3: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_4: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_5: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_6: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_7: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_8: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_9: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_10: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ACTIVE: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    INACTIVE: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INACTIVE_FROM: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    INACTIVE_TO: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEFAULT_WAREHOUSE: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICTURE: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPERTY_1: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_2: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_3: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_4: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_5: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_6: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_7: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_8: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_9: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_10: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_11: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_12: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_13: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_14: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_15: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_16: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_17: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_18: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_19: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_20: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_21: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_22: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_23: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_24: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_25: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_26: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_27: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_28: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_29: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_30: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_31: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_32: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_33: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_34: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_35: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_36: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_37: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_38: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_39: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_40: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_41: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_42: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_43: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_44: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_45: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_46: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_47: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_48: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_49: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_50: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_51: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_52: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_53: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_54: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_55: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_56: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_57: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_58: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_59: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_60: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_61: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_62: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_63: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PROPERTY_64: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ACTIVE_REMARKS: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE_REMARKS: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UNITS_PER_TIME: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TIME_PER_UNITS: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALLOCATION: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      ResourceAllocationEnum,
      true,
      true
    >;
    LINKED_ITEM: OrderableEdmTypeField<
      Resources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEVANT_FOR_SINGLE_RUN_1: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RELEVANT_FOR_SINGLE_RUN_2: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RELEVANT_FOR_SINGLE_RUN_3: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RELEVANT_FOR_SINGLE_RUN_4: EnumField<
      Resources<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RESOURCE_WAREHOUSES: CollectionField<
      Resources<DeSerializers>,
      DeSerializersT,
      ResourceWarehouse,
      true,
      true
    >;
    RESOURCE_FIXED_ASSETS: CollectionField<
      Resources<DeSerializers>,
      DeSerializersT,
      ResourceFixedAsset,
      true,
      true
    >;
    RESOURCE_EMPLOYEES: CollectionField<
      Resources<DeSerializers>,
      DeSerializersT,
      ResourceEmployee,
      true,
      true
    >;
    RESOURCE_DAILY_CAPACITIES: CollectionField<
      Resources<DeSerializers>,
      DeSerializersT,
      ResourceDailyCapacity,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resourceCapacities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_CAPACITIES: OneToManyLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ResourceCapacitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resourceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE_GROUP: OneToOneLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ResourceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      Resources<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Resources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link visCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIS_CODE: fieldBuilder.buildEdmTypeField('VisCode', 'Edm.String', true),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.Int32', true),
        /**
         * Static representation of the {@link codeBar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_BAR: fieldBuilder.buildEdmTypeField('CodeBar', 'Edm.String', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link foreignName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOREIGN_NAME: fieldBuilder.buildEdmTypeField(
          'ForeignName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', ResourceTypeEnum, true),
        /**
         * Static representation of the {@link group} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP: fieldBuilder.buildEdmTypeField('Group', 'Edm.Int32', true),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_METHOD: fieldBuilder.buildEnumField(
          'IssueMethod',
          ResourceIssueMethodEnum,
          true
        ),
        /**
         * Static representation of the {@link cost1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_1: fieldBuilder.buildEdmTypeField('Cost1', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_2: fieldBuilder.buildEdmTypeField('Cost2', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_3: fieldBuilder.buildEdmTypeField('Cost3', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_4: fieldBuilder.buildEdmTypeField('Cost4', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_5: fieldBuilder.buildEdmTypeField('Cost5', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_6: fieldBuilder.buildEdmTypeField('Cost6', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_7: fieldBuilder.buildEdmTypeField('Cost7', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_8: fieldBuilder.buildEdmTypeField('Cost8', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_9: fieldBuilder.buildEdmTypeField('Cost9', 'Edm.Double', true),
        /**
         * Static representation of the {@link cost10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_10: fieldBuilder.buildEdmTypeField('Cost10', 'Edm.Double', true),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link inactiveFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'InactiveFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link inactiveTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'InactiveTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link defaultWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'DefaultWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link picture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE: fieldBuilder.buildEdmTypeField('Picture', 'Edm.String', true),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link property1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_1: fieldBuilder.buildEnumField('Property1', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_2: fieldBuilder.buildEnumField('Property2', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_3: fieldBuilder.buildEnumField('Property3', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_4: fieldBuilder.buildEnumField('Property4', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_5: fieldBuilder.buildEnumField('Property5', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_6: fieldBuilder.buildEnumField('Property6', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_7: fieldBuilder.buildEnumField('Property7', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_8: fieldBuilder.buildEnumField('Property8', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_9: fieldBuilder.buildEnumField('Property9', BoYesNoEnum, true),
        /**
         * Static representation of the {@link property10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_10: fieldBuilder.buildEnumField(
          'Property10',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_11: fieldBuilder.buildEnumField(
          'Property11',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_12: fieldBuilder.buildEnumField(
          'Property12',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_13: fieldBuilder.buildEnumField(
          'Property13',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_14: fieldBuilder.buildEnumField(
          'Property14',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_15: fieldBuilder.buildEnumField(
          'Property15',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property16} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_16: fieldBuilder.buildEnumField(
          'Property16',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property17} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_17: fieldBuilder.buildEnumField(
          'Property17',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property18} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_18: fieldBuilder.buildEnumField(
          'Property18',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property19} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_19: fieldBuilder.buildEnumField(
          'Property19',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property20} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_20: fieldBuilder.buildEnumField(
          'Property20',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property21} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_21: fieldBuilder.buildEnumField(
          'Property21',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property22} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_22: fieldBuilder.buildEnumField(
          'Property22',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property23} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_23: fieldBuilder.buildEnumField(
          'Property23',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property24} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_24: fieldBuilder.buildEnumField(
          'Property24',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property25} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_25: fieldBuilder.buildEnumField(
          'Property25',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property26} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_26: fieldBuilder.buildEnumField(
          'Property26',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property27} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_27: fieldBuilder.buildEnumField(
          'Property27',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property28} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_28: fieldBuilder.buildEnumField(
          'Property28',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property29} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_29: fieldBuilder.buildEnumField(
          'Property29',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property30} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_30: fieldBuilder.buildEnumField(
          'Property30',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property31} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_31: fieldBuilder.buildEnumField(
          'Property31',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property32} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_32: fieldBuilder.buildEnumField(
          'Property32',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property33} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_33: fieldBuilder.buildEnumField(
          'Property33',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property34} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_34: fieldBuilder.buildEnumField(
          'Property34',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property35} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_35: fieldBuilder.buildEnumField(
          'Property35',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property36} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_36: fieldBuilder.buildEnumField(
          'Property36',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property37} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_37: fieldBuilder.buildEnumField(
          'Property37',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property38} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_38: fieldBuilder.buildEnumField(
          'Property38',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property39} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_39: fieldBuilder.buildEnumField(
          'Property39',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property40} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_40: fieldBuilder.buildEnumField(
          'Property40',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property41} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_41: fieldBuilder.buildEnumField(
          'Property41',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property42} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_42: fieldBuilder.buildEnumField(
          'Property42',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property43} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_43: fieldBuilder.buildEnumField(
          'Property43',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property44} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_44: fieldBuilder.buildEnumField(
          'Property44',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property45} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_45: fieldBuilder.buildEnumField(
          'Property45',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property46} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_46: fieldBuilder.buildEnumField(
          'Property46',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property47} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_47: fieldBuilder.buildEnumField(
          'Property47',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property48} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_48: fieldBuilder.buildEnumField(
          'Property48',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property49} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_49: fieldBuilder.buildEnumField(
          'Property49',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property50} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_50: fieldBuilder.buildEnumField(
          'Property50',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property51} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_51: fieldBuilder.buildEnumField(
          'Property51',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property52} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_52: fieldBuilder.buildEnumField(
          'Property52',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property53} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_53: fieldBuilder.buildEnumField(
          'Property53',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property54} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_54: fieldBuilder.buildEnumField(
          'Property54',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property55} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_55: fieldBuilder.buildEnumField(
          'Property55',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property56} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_56: fieldBuilder.buildEnumField(
          'Property56',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property57} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_57: fieldBuilder.buildEnumField(
          'Property57',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property58} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_58: fieldBuilder.buildEnumField(
          'Property58',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property59} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_59: fieldBuilder.buildEnumField(
          'Property59',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property60} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_60: fieldBuilder.buildEnumField(
          'Property60',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property61} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_61: fieldBuilder.buildEnumField(
          'Property61',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property62} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_62: fieldBuilder.buildEnumField(
          'Property62',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property63} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_63: fieldBuilder.buildEnumField(
          'Property63',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link property64} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPERTY_64: fieldBuilder.buildEnumField(
          'Property64',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link activeRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_REMARKS: fieldBuilder.buildEdmTypeField(
          'ActiveRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inactiveRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE_REMARKS: fieldBuilder.buildEdmTypeField(
          'InactiveRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link unitsPerTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITS_PER_TIME: fieldBuilder.buildEdmTypeField(
          'UnitsPerTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link timePerUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PER_UNITS: fieldBuilder.buildEdmTypeField(
          'TimePerUnits',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link allocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION: fieldBuilder.buildEnumField(
          'Allocation',
          ResourceAllocationEnum,
          true
        ),
        /**
         * Static representation of the {@link linkedItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINKED_ITEM: fieldBuilder.buildEdmTypeField(
          'LinkedItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relevantForSingleRun1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEVANT_FOR_SINGLE_RUN_1: fieldBuilder.buildEnumField(
          'RelevantForSingleRun1',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link relevantForSingleRun2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEVANT_FOR_SINGLE_RUN_2: fieldBuilder.buildEnumField(
          'RelevantForSingleRun2',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link relevantForSingleRun3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEVANT_FOR_SINGLE_RUN_3: fieldBuilder.buildEnumField(
          'RelevantForSingleRun3',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link relevantForSingleRun4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEVANT_FOR_SINGLE_RUN_4: fieldBuilder.buildEnumField(
          'RelevantForSingleRun4',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link resourceWarehouses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_WAREHOUSES: fieldBuilder.buildCollectionField(
          'ResourceWarehouses',
          ResourceWarehouse,
          true
        ),
        /**
         * Static representation of the {@link resourceFixedAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_FIXED_ASSETS: fieldBuilder.buildCollectionField(
          'ResourceFixedAssets',
          ResourceFixedAsset,
          true
        ),
        /**
         * Static representation of the {@link resourceEmployees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_EMPLOYEES: fieldBuilder.buildCollectionField(
          'ResourceEmployees',
          ResourceEmployee,
          true
        ),
        /**
         * Static representation of the {@link resourceDailyCapacities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_DAILY_CAPACITIES: fieldBuilder.buildCollectionField(
          'ResourceDailyCapacities',
          ResourceDailyCapacity,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Resources)
      };
    }

    return this._schema;
  }
}
