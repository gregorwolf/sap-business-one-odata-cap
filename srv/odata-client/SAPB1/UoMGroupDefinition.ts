/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
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
 * UoMGroupDefinition
 */
export interface UoMGroupDefinition<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Alternate Uo M.
   * @nullable
   */
  alternateUoM?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Alternate Quantity.
   * @nullable
   */
  alternateQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Base Quantity.
   * @nullable
   */
  baseQuantity?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Weight Factor.
   * @nullable
   */
  weightFactor?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Udf Factor.
   * @nullable
   */
  udfFactor?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Active.
   * @nullable
   */
  active?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
}

/**
 * UoMGroupDefinitionField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class UoMGroupDefinitionField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  UoMGroupDefinition,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link UoMGroupDefinition.alternateUoM} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternateUoM: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AlternateUoM', 'Edm.Int32', true);
  /**
   * Representation of the {@link UoMGroupDefinition.alternateQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alternateQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AlternateQuantity',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link UoMGroupDefinition.baseQuantity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseQuantity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BaseQuantity', 'Edm.Double', true);
  /**
   * Representation of the {@link UoMGroupDefinition.weightFactor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weightFactor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('WeightFactor', 'Edm.Int32', true);
  /**
   * Representation of the {@link UoMGroupDefinition.udfFactor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  udfFactor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('UdfFactor', 'Edm.Int32', true);
  /**
   * Representation of the {@link UoMGroupDefinition.active} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  active: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('Active', BoYesNoEnum, true);

  /**
   * Creates an instance of UoMGroupDefinitionField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, UoMGroupDefinition, fieldOptions);
  }
}

export namespace UoMGroupDefinition {
  /**
   * Metadata information on all properties of the `UoMGroupDefinition` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<UoMGroupDefinition>[] = [
    {
      originalName: 'AlternateUoM',
      name: 'alternateUoM',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AlternateQuantity',
      name: 'alternateQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'BaseQuantity',
      name: 'baseQuantity',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'WeightFactor',
      name: 'weightFactor',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'UdfFactor',
      name: 'udfFactor',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'Active',
      name: 'active',
      type: 'Edm.Enum',
      isCollection: false
    }
  ];
}
