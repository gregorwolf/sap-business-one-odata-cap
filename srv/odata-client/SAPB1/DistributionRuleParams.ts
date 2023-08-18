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
 * DistributionRuleParams
 */
export interface DistributionRuleParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Factor Code.
   * @nullable
   */
  factorCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Factor Description.
   * @nullable
   */
  factorDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DistributionRuleParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DistributionRuleParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DistributionRuleParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DistributionRuleParams.factorCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('FactorCode', 'Edm.String', true);
  /**
   * Representation of the {@link DistributionRuleParams.factorDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  factorDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'FactorDescription',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of DistributionRuleParamsField.
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
      DistributionRuleParams,
      fieldOptions
    );
  }
}

export namespace DistributionRuleParams {
  /**
   * Metadata information on all properties of the `DistributionRuleParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DistributionRuleParams>[] = [
    {
      originalName: 'FactorCode',
      name: 'factorCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'FactorDescription',
      name: 'factorDescription',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
