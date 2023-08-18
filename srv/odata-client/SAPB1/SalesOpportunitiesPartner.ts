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
 * SalesOpportunitiesPartner
 */
export interface SalesOpportunitiesPartner<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Row No.
   * @nullable
   */
  rowNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Partners.
   * @nullable
   */
  partners?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Details.
   * @nullable
   */
  details?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Relationship Code.
   * @nullable
   */
  relationshipCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Nichterhalten.
   */
  uNichterhalten: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SalesOpportunitiesPartnerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunitiesPartnerField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SalesOpportunitiesPartner,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SalesOpportunitiesPartner.rowNo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RowNo', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesPartner.partners} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partners: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Partners', 'Edm.Int32', true);
  /**
   * Representation of the {@link SalesOpportunitiesPartner.details} property for query construction.
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
   * Representation of the {@link SalesOpportunitiesPartner.relationshipCode} property for query construction.
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
   * Representation of the {@link SalesOpportunitiesPartner.sequenceNo} property for query construction.
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
   * Representation of the {@link SalesOpportunitiesPartner.uNichterhalten} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uNichterhalten: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_nichterhalten',
    'Edm.String',
    false
  );

  /**
   * Creates an instance of SalesOpportunitiesPartnerField.
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
      SalesOpportunitiesPartner,
      fieldOptions
    );
  }
}

export namespace SalesOpportunitiesPartner {
  /**
   * Metadata information on all properties of the `SalesOpportunitiesPartner` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SalesOpportunitiesPartner>[] =
    [
      {
        originalName: 'RowNo',
        name: 'rowNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Partners',
        name: 'partners',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Details',
        name: 'details',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'RelationshipCode',
        name: 'relationshipCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'SequenceNo',
        name: 'sequenceNo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'U_nichterhalten',
        name: 'uNichterhalten',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
