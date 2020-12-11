/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class TrackingNoteParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TrackingNoteParams> {
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

  /**
   * Creates an instance of TrackingNoteParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TrackingNoteParams);
  }
}

export namespace TrackingNoteParams {
  /**
   * Metadata information on all properties of the `TrackingNoteParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TrackingNoteParams>[] = [{
    originalName: 'TrackingNoteNumber',
    name: 'trackingNoteNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CCDNumber',
    name: 'ccdNumber',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TrackingNoteParams {
    return deserializeComplexTypeV4(json, TrackingNoteParams);
  }
}
