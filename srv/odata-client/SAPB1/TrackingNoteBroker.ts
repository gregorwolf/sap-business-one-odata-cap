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
 * TrackingNoteBroker
 */
export interface TrackingNoteBroker<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Tracking Note Number.
   * @nullable
   */
  trackingNoteNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tracking Note Line Number.
   * @nullable
   */
  trackingNoteLineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Agreement Number.
   * @nullable
   */
  agreementNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
}

/**
 * TrackingNoteBrokerField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class TrackingNoteBrokerField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  TrackingNoteBroker,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link TrackingNoteBroker.trackingNoteNumber} property for query construction.
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
   * Representation of the {@link TrackingNoteBroker.trackingNoteLineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TrackingNoteLineNumber',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link TrackingNoteBroker.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link TrackingNoteBroker.agreementNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'AgreementNumber',
    'Edm.Int32',
    true
  );

  /**
   * Creates an instance of TrackingNoteBrokerField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, TrackingNoteBroker, fieldOptions);
  }
}

export namespace TrackingNoteBroker {
  /**
   * Metadata information on all properties of the `TrackingNoteBroker` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TrackingNoteBroker>[] = [
    {
      originalName: 'TrackingNoteNumber',
      name: 'trackingNoteNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TrackingNoteLineNumber',
      name: 'trackingNoteLineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AgreementNumber',
      name: 'agreementNumber',
      type: 'Edm.Int32',
      isCollection: false
    }
  ];
}
