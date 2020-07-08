/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxReportDocument
 */
export interface TaxReportDocument {
  /**
   * From Number.
   * @nullable
   */
  fromNumber?: number;
  /**
   * To Number.
   * @nullable
   */
  toNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxReportDocument.build]] instead.
 */
export function createTaxReportDocument(json: any): TaxReportDocument {
  return TaxReportDocument.build(json);
}

/**
 * TaxReportDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportDocumentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxReportDocument.fromNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FromNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxReportDocument.toNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ToNumber', this, 'Edm.Int32');
}

export namespace TaxReportDocument {
  export function build(json: { [keys: string]: FieldType }): TaxReportDocument {
    return createComplexType(json, {
      FromNumber: (fromNumber: number) => ({ fromNumber: edmToTs(fromNumber, 'Edm.Int32') }),
      ToNumber: (toNumber: number) => ({ toNumber: edmToTs(toNumber, 'Edm.Int32') })
    });
  }
}
