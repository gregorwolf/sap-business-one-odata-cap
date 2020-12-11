/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TrackingNoteBroker
 */
export interface TrackingNoteBroker {
  /**
   * Tracking Note Number.
   * @nullable
   */
  trackingNoteNumber?: number;
  /**
   * Tracking Note Line Number.
   * @nullable
   */
  trackingNoteLineNumber?: number;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: string;
  /**
   * Agreement Number.
   * @nullable
   */
  agreementNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteBroker.build]] instead.
 */
export function createTrackingNoteBroker(json: any): TrackingNoteBroker {
  return TrackingNoteBroker.build(json);
}

/**
 * TrackingNoteBrokerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TrackingNoteBrokerField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TrackingNoteBroker> {
  /**
   * Representation of the [[TrackingNoteBroker.trackingNoteNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TrackingNoteBroker.trackingNoteLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteLineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TrackingNoteBroker.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[TrackingNoteBroker.agreementNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of TrackingNoteBrokerField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TrackingNoteBroker);
  }
}

export namespace TrackingNoteBroker {
  /**
   * Metadata information on all properties of the `TrackingNoteBroker` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TrackingNoteBroker>[] = [{
    originalName: 'TrackingNoteNumber',
    name: 'trackingNoteNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'TrackingNoteLineNumber',
    name: 'trackingNoteLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AgreementNumber',
    name: 'agreementNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TrackingNoteBroker {
    return deserializeComplexTypeV4(json, TrackingNoteBroker);
  }
}
