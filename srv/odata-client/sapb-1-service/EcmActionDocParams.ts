/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class EcmActionDocParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace EcmActionDocParams {
  export function build(json: { [keys: string]: FieldType }): EcmActionDocParams {
    return createComplexType(json, {
      Protocol: (protocol: string) => ({ protocol: edmToTs(protocol, 'Edm.String') }),
      SourceType: (sourceType: string) => ({ sourceType: edmToTs(sourceType, 'Edm.String') }),
      SourceObject: (sourceObject: number) => ({ sourceObject: edmToTs(sourceObject, 'Edm.Int32') })
    });
  }
}
