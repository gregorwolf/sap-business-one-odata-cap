/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceDailyCapacityWeekdayEnum } from './ResourceDailyCapacityWeekdayEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * ResourceDailyCapacity
 */
export interface ResourceDailyCapacity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Weekday.
   * @nullable
   */
  weekday?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Factor 1.
   * @nullable
   */
  factor1?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 2.
   * @nullable
   */
  factor2?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 3.
   * @nullable
   */
  factor3?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Factor 4.
   * @nullable
   */
  factor4?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Single Run.
   * @nullable
   */
  singleRun?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * ResourceDailyCapacityField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceDailyCapacityField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ResourceDailyCapacity,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ResourceDailyCapacity.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link ResourceDailyCapacity.weekday} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weekday: EnumField<
    EntityT,
    DeSerializersT,
    ResourceDailyCapacityWeekdayEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'Weekday',
    ResourceDailyCapacityWeekdayEnum,
    true
  );
  /**
   * Representation of the {@link ResourceDailyCapacity.factor1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor1', 'Edm.Double', true);
  /**
   * Representation of the {@link ResourceDailyCapacity.factor2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor2', 'Edm.Double', true);
  /**
   * Representation of the {@link ResourceDailyCapacity.factor3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor3', 'Edm.Double', true);
  /**
   * Representation of the {@link ResourceDailyCapacity.factor4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factor4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Factor4', 'Edm.Double', true);
  /**
   * Representation of the {@link ResourceDailyCapacity.total} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Total', 'Edm.Double', true);
  /**
   * Representation of the {@link ResourceDailyCapacity.remarks} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true);
  /**
   * Representation of the {@link ResourceDailyCapacity.singleRun} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  singleRun: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SingleRun', 'Edm.Double', true);

  /**
   * Creates an instance of ResourceDailyCapacityField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      ResourceDailyCapacity,
      fieldOptions
    );
  }
}

export namespace ResourceDailyCapacity {
  /**
   * Metadata information on all properties of the `ResourceDailyCapacity` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ResourceDailyCapacity>[] = [
    {
      originalName: 'Code',
      name: 'code',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Weekday',
      name: 'weekday',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'Factor1',
      name: 'factor1',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor2',
      name: 'factor2',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor3',
      name: 'factor3',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Factor4',
      name: 'factor4',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Total',
      name: 'total',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Remarks',
      name: 'remarks',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SingleRun',
      name: 'singleRun',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
