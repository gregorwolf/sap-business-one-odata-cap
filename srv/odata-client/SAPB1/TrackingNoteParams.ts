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
 * TrackingNoteParams
 */
export interface TrackingNoteParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Tracking Note Number.
   * @nullable
   */
  trackingNoteNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ccd Number.
   * @nullable
   */
  ccdNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * TrackingNoteParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TrackingNoteParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TrackingNoteParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TrackingNoteParams.trackingNoteNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TrackingNoteNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TrackingNoteParams.ccdNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CCDNumber', 'Edm.String', true);

  /**
   * Creates an instance of TrackingNoteParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TrackingNoteParams, fieldOptions);
  }
}

export namespace TrackingNoteParams {
  /**
   * Metadata information on all properties of the `TrackingNoteParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TrackingNoteParams>[] = [
    {
      originalName: 'TrackingNoteNumber',
      name: 'trackingNoteNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'CCDNumber',
      name: 'ccdNumber',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
