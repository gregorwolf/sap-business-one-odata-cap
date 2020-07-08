/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * LegalDataParams
 */
export interface LegalDataParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Source Object Type.
   * @nullable
   */
  sourceObjectType?: string;
  /**
   * Source Object Entry.
   * @nullable
   */
  sourceObjectEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[LegalDataParams.build]] instead.
 */
export function createLegalDataParams(json: any): LegalDataParams {
  return LegalDataParams.build(json);
}

/**
 * LegalDataParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LegalDataParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[LegalDataParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[LegalDataParams.sourceObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObjectType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('SourceObjectType', this, 'Edm.String');
  /**
   * Representation of the [[LegalDataParams.sourceObjectEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sourceObjectEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SourceObjectEntry', this, 'Edm.Int32');
}

export namespace LegalDataParams {
  export function build(json: { [keys: string]: FieldType }): LegalDataParams {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      SourceObjectType: (sourceObjectType: string) => ({ sourceObjectType: edmToTs(sourceObjectType, 'Edm.String') }),
      SourceObjectEntry: (sourceObjectEntry: number) => ({ sourceObjectEntry: edmToTs(sourceObjectEntry, 'Edm.Int32') })
    });
  }
}
