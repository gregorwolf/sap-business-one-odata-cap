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
 * CampaignPartner
 */
export interface CampaignPartner<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Campaign Number.
   * @nullable
   */
  campaignNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Campaign Line Number.
   * @nullable
   */
  campaignLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Partner Id.
   * @nullable
   */
  partnerId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Related Bp.
   * @nullable
   */
  relatedBp?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CampaignPartnerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CampaignPartnerField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CampaignPartner,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CampaignPartner.campaignNumber} property for query construction.
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
   * Representation of the {@link CampaignPartner.campaignLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  campaignLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CampaignLineNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CampaignPartner.partnerId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partnerId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('PartnerID', 'Edm.Int32', true);
  /**
   * Representation of the {@link CampaignPartner.relationshipCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relationshipCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'RelationshipCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link CampaignPartner.relatedBp} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  relatedBp: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RelatedBP', 'Edm.String', true);
  /**
   * Representation of the {@link CampaignPartner.details} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  details: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true);

  /**
   * Creates an instance of CampaignPartnerField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CampaignPartner, fieldOptions);
  }
}

export namespace CampaignPartner {
  /**
   * Metadata information on all properties of the `CampaignPartner` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CampaignPartner>[] = [
    {
      originalName: 'CampaignNumber',
      name: 'campaignNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CampaignLineNumber',
      name: 'campaignLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'PartnerID',
      name: 'partnerId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RelationshipCode',
      name: 'relationshipCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'RelatedBP',
      name: 'relatedBp',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Details',
      name: 'details',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
