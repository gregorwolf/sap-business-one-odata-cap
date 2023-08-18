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
 * CampaignParams
 */
export interface CampaignParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Campaign Name.
   * @nullable
   */
  campaignName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CampaignParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CampaignParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CampaignParams.campaignNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CampaignNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link CampaignParams.campaignName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CampaignName', 'Edm.String', true);

  /**
   * Creates an instance of CampaignParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CampaignParams, fieldOptions);
  }
}

export namespace CampaignParams {
  /**
   * Metadata information on all properties of the `CampaignParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignParams>[] = [
    {
      originalName: 'CampaignNumber',
      name: 'campaignNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CampaignName',
      name: 'campaignName',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
