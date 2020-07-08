/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TrackingNoteParams
 */
export interface TrackingNoteParams {
  /**
   * Tracking Note Number.
   * @nullable
   */
  trackingNoteNumber?: number;
  /**
   * Ccd Number.
   * @nullable
   */
  ccdNumber?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TrackingNoteParams.build]] instead.
 */
export function createTrackingNoteParams(json: any): TrackingNoteParams {
  return TrackingNoteParams.build(json);
}

/**
 * TrackingNoteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TrackingNoteParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TrackingNoteParams.trackingNoteNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trackingNoteNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TrackingNoteNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TrackingNoteParams.ccdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ccdNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CCDNumber', this, 'Edm.String');
}

export namespace TrackingNoteParams {
  export function build(json: { [keys: string]: FieldType }): TrackingNoteParams {
    return createComplexType(json, {
      TrackingNoteNumber: (trackingNoteNumber: number) => ({ trackingNoteNumber: edmToTs(trackingNoteNumber, 'Edm.Int32') }),
      CCDNumber: (ccdNumber: string) => ({ ccdNumber: edmToTs(ccdNumber, 'Edm.String') })
    });
  }
}
