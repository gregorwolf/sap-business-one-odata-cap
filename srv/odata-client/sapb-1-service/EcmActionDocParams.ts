/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EcmActionDocParams
 */
export interface EcmActionDocParams {
  /**
   * Protocol.
   * @nullable
   */
  protocol?: string;
  /**
   * Source Type.
   * @nullable
   */
  sourceType?: string;
  /**
   * Source Object.
   * @nullable
   */
  sourceObject?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EcmActionDocParams.build]] instead.
 */
export function createEcmActionDocParams(json: any): EcmActionDocParams {
  return EcmActionDocParams.build(json);
}

/**
 * EcmActionDocParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionDocParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionDocParams> {
  /**
   * Representation of the [[EcmActionDocParams.protocol]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  protocol: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Protocol', this, 'Edm.String');
  /**
   * Representation of the [[EcmActionDocParams.sourceType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourceType', this, 'Edm.String');
  /**
   * Representation of the [[EcmActionDocParams.sourceObject]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObject: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceObject', this, 'Edm.Int32');

  /**
   * Creates an instance of EcmActionDocParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EcmActionDocParams);
  }
}

export namespace EcmActionDocParams {
  /**
   * Metadata information on all properties of the `EcmActionDocParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionDocParams>[] = [{
    originalName: 'Protocol',
    name: 'protocol',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SourceType',
    name: 'sourceType',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SourceObject',
    name: 'sourceObject',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EcmActionDocParams {
    return deserializeComplexTypeV4(json, EcmActionDocParams);
  }
}
