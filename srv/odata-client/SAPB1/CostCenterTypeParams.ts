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
 * CostCenterTypeParams
 */
export interface CostCenterTypeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Cost Center Type Code.
   * @nullable
   */
  costCenterTypeCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CostCenterTypeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CostCenterTypeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CostCenterTypeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CostCenterTypeParams.costCenterTypeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costCenterTypeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostCenterTypeCode',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of CostCenterTypeParamsField.
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
      CostCenterTypeParams,
      fieldOptions
    );
  }
}

export namespace CostCenterTypeParams {
  /**
   * Metadata information on all properties of the `CostCenterTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CostCenterTypeParams>[] = [
    {
      originalName: 'CostCenterTypeCode',
      name: 'costCenterTypeCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
