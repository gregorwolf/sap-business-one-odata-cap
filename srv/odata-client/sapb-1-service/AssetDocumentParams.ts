/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AssetDocumentParams
 */
export interface AssetDocumentParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Cancellation Date.
   * @nullable
   */
  cancellationDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentParams.build]] instead.
 */
export function createAssetDocumentParams(json: any): AssetDocumentParams {
  return AssetDocumentParams.build(json);
}

/**
 * AssetDocumentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AssetDocumentParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AssetDocumentParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[AssetDocumentParams.cancellationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cancellationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CancellationDate', this, 'Edm.DateTimeOffset');
}

export namespace AssetDocumentParams {
  export function build(json: { [keys: string]: FieldType }): AssetDocumentParams {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      CancellationDate: (cancellationDate: Moment) => ({ cancellationDate: edmToTs(cancellationDate, 'Edm.DateTimeOffset') })
    });
  }
}
