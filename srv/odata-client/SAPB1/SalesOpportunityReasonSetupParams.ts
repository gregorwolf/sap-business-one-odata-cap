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
 * SalesOpportunityReasonSetupParams
 */
export interface SalesOpportunityReasonSetupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  description?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SalesOpportunityReasonSetupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunityReasonSetupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesOpportunityReasonSetupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesOpportunityReasonSetupParams.sequenceNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SequenceNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunityReasonSetupParams.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true);

  /**
   * Creates an instance of SalesOpportunityReasonSetupParamsField.
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
      SalesOpportunityReasonSetupParams,
      fieldOptions
    );
  }
}

export namespace SalesOpportunityReasonSetupParams {
  /**
   * Metadata information on all properties of the `SalesOpportunityReasonSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunityReasonSetupParams>[] =
    [
      {
        originalName: 'SequenceNo',
        name: 'sequenceNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Description',
        name: 'description',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
