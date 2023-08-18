/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * DistributionRuleLine
 */
export interface DistributionRuleLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Center Code.
   * @nullable
   */
  centerCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Total In Center.
   * @nullable
   */
  totalInCenter?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Effective From.
   * @nullable
   */
  effectiveFrom?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Effective To.
   * @nullable
   */
  effectiveTo?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * DistributionRuleLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DistributionRuleLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DistributionRuleLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DistributionRuleLine.centerCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  centerCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CenterCode', 'Edm.String', true);
  /**
   * Representation of the {@link DistributionRuleLine.totalInCenter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalInCenter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TotalInCenter', 'Edm.Double', true);
  /**
   * Representation of the {@link DistributionRuleLine.effectiveFrom} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveFrom: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveFrom',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link DistributionRuleLine.effectiveTo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveTo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EffectiveTo',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of DistributionRuleLineField.
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
      DistributionRuleLine,
      fieldOptions
    );
  }
}

export namespace DistributionRuleLine {
  /**
   * Metadata information on all properties of the `DistributionRuleLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DistributionRuleLine>[] = [
    {
      originalName: 'CenterCode',
      name: 'centerCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TotalInCenter',
      name: 'totalInCenter',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'EffectiveFrom',
      name: 'effectiveFrom',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    },
    {
      originalName: 'EffectiveTo',
      name: 'effectiveTo',
      type: 'Edm.DateTimeOffset',
      isCollection: false
    }
  ];
}
