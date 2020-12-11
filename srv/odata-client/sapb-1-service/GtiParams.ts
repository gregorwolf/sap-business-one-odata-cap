/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * GtiParams
 */
export interface GtiParams {
  /**
   * Inbound File.
   * @nullable
   */
  inboundFile?: string;
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[GtiParams.build]] instead.
 */
export function createGtiParams(json: any): GtiParams {
  return GtiParams.build(json);
}

/**
 * GtiParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GtiParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GtiParams> {
  /**
   * Representation of the [[GtiParams.inboundFile]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  inboundFile: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InboundFile', this, 'Edm.String');
  /**
   * Representation of the [[GtiParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of GtiParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, GtiParams);
  }
}

export namespace GtiParams {
  /**
   * Metadata information on all properties of the `GtiParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<GtiParams>[] = [{
    originalName: 'InboundFile',
    name: 'inboundFile',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): GtiParams {
    return deserializeComplexTypeV4(json, GtiParams);
  }
}
