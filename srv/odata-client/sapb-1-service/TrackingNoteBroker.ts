/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class TrackingNoteBrokerField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace TrackingNoteBroker {
  export function build(json: { [keys: string]: FieldType }): TrackingNoteBroker {
    return createComplexType(json, {
      TrackingNoteNumber: (trackingNoteNumber: number) => ({ trackingNoteNumber: edmToTs(trackingNoteNumber, 'Edm.Int32') }),
      TrackingNoteLineNumber: (trackingNoteLineNumber: number) => ({ trackingNoteLineNumber: edmToTs(trackingNoteLineNumber, 'Edm.Int32') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      AgreementNumber: (agreementNumber: number) => ({ agreementNumber: edmToTs(agreementNumber, 'Edm.Int32') })
    });
  }
}
