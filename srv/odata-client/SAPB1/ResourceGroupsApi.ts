/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceGroups } from './ResourceGroups';
import { ResourceGroupsRequestBuilder } from './ResourceGroupsRequestBuilder';
import { ResourcesApi } from './ResourcesApi';
import { ResourceTypeEnum } from './ResourceTypeEnum';
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
export class ResourceGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ResourceGroups<DeSerializersT>, DeSerializersT>
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
  ): ResourceGroupsApi<DeSerializersT> {
    return new ResourceGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: OneToManyLink<
      ResourceGroups<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ResourcesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      RESOURCES: new OneToManyLink('Resources', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ResourceGroups;

  requestBuilder(): ResourceGroupsRequestBuilder<DeSerializersT> {
    return new ResourceGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ResourceGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ResourceGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ResourceGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ResourceGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ResourceGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      ResourceTypeEnum,
      true,
      true
    >;
    COST_NAME_1: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_1: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_2: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_2: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_3: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_3: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_4: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_4: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_5: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_5: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_6: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_6: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_7: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_7: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_8: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_8: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_9: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_9: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    COST_NAME_10: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_10: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    NUM_OF_UNITS_TEXT: OrderableEdmTypeField<
      ResourceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: OneToManyLink<
      ResourceGroups<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ResourceGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', ResourceTypeEnum, true),
        /**
         * Static representation of the {@link costName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_1: fieldBuilder.buildEdmTypeField(
          'CostName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_1: fieldBuilder.buildEdmTypeField('Cost1', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_2: fieldBuilder.buildEdmTypeField(
          'CostName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_2: fieldBuilder.buildEdmTypeField('Cost2', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_3: fieldBuilder.buildEdmTypeField(
          'CostName3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_3: fieldBuilder.buildEdmTypeField('Cost3', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_4: fieldBuilder.buildEdmTypeField(
          'CostName4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_4: fieldBuilder.buildEdmTypeField('Cost4', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_5: fieldBuilder.buildEdmTypeField(
          'CostName5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_5: fieldBuilder.buildEdmTypeField('Cost5', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_6: fieldBuilder.buildEdmTypeField(
          'CostName6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_6: fieldBuilder.buildEdmTypeField('Cost6', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_7: fieldBuilder.buildEdmTypeField(
          'CostName7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_7: fieldBuilder.buildEdmTypeField('Cost7', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_8: fieldBuilder.buildEdmTypeField(
          'CostName8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_8: fieldBuilder.buildEdmTypeField('Cost8', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_9: fieldBuilder.buildEdmTypeField(
          'CostName9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_9: fieldBuilder.buildEdmTypeField('Cost9', 'Edm.Double', true),
        /**
         * Static representation of the {@link costName10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_NAME_10: fieldBuilder.buildEdmTypeField(
          'CostName10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cost10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_10: fieldBuilder.buildEdmTypeField('Cost10', 'Edm.Double', true),
        /**
         * Static representation of the {@link numOfUnitsText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_UNITS_TEXT: fieldBuilder.buildEdmTypeField(
          'NumOfUnitsText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ResourceGroups)
      };
    }

    return this._schema;
  }
}
