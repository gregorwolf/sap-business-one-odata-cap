/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BoeDocumentTypeParams
 */
export interface BoeDocumentTypeParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BoeDocumentTypeParams.build]] instead.
 */
export function createBoeDocumentTypeParams(json: any): BoeDocumentTypeParams {
  return BoeDocumentTypeParams.build(json);
}

/**
 * BoeDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeDocumentTypeParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BoeDocumentTypeParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BoeDocumentTypeParams.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocType', this, 'Edm.String');
}

export namespace BoeDocumentTypeParams {
  export function build(json: { [keys: string]: FieldType }): BoeDocumentTypeParams {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      DocType: (docType: string) => ({ docType: edmToTs(docType, 'Edm.String') })
    });
  }
}
