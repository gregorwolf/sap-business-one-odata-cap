/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UnitOfMeasurementGroups } from './UnitOfMeasurementGroups';
import { UnitOfMeasurementGroupsRequestBuilder } from './UnitOfMeasurementGroupsRequestBuilder';
import { ItemGroupsApi } from './ItemGroupsApi';
import { ItemsApi } from './ItemsApi';
import { BinLocationsApi } from './BinLocationsApi';
import { UnitOfMeasurementsApi } from './UnitOfMeasurementsApi';
import { UoMGroupDefinition } from './UoMGroupDefinition';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class UnitOfMeasurementGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UnitOfMeasurementGroups<DeSerializersT>, DeSerializersT>
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
  ): UnitOfMeasurementGroupsApi<DeSerializersT> {
    return new UnitOfMeasurementGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemGroupsApi<DeSerializersT>,
      ItemsApi<DeSerializersT>,
      BinLocationsApi<DeSerializersT>,
      UnitOfMeasurementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_GROUPS: new OneToManyLink('ItemGroups', this, linkedApis[0]),
      ITEMS: new OneToManyLink('Items', this, linkedApis[1]),
      BIN_LOCATIONS: new OneToManyLink('BinLocations', this, linkedApis[2]),
      UNIT_OF_MEASUREMENT: new OneToOneLink(
        'UnitOfMeasurement',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = UnitOfMeasurementGroups;

  requestBuilder(): UnitOfMeasurementGroupsRequestBuilder<DeSerializersT> {
    return new UnitOfMeasurementGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UnitOfMeasurementGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UnitOfMeasurementGroups<DeSerializersT>,
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
    typeof UnitOfMeasurementGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UnitOfMeasurementGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      UnitOfMeasurementGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      UnitOfMeasurementGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      UnitOfMeasurementGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_UO_M: OrderableEdmTypeField<
      UnitOfMeasurementGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    UO_M_GROUP_DEFINITION_COLLECTION: CollectionField<
      UnitOfMeasurementGroups<DeSerializers>,
      DeSerializersT,
      UoMGroupDefinition,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_GROUPS: OneToManyLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      ItemGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link unitOfMeasurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UNIT_OF_MEASUREMENT: OneToOneLink<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT,
      UnitOfMeasurementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UnitOfMeasurementGroups<DeSerializers>>;
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
         * Static representation of the {@link baseUoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UO_M: fieldBuilder.buildEdmTypeField('BaseUoM', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uoMGroupDefinitionCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UO_M_GROUP_DEFINITION_COLLECTION: fieldBuilder.buildCollectionField(
          'UoMGroupDefinitionCollection',
          UoMGroupDefinition,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UnitOfMeasurementGroups)
      };
    }

    return this._schema;
  }
}
