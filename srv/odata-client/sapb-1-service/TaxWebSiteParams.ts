/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * TaxWebSiteParams
 */
export interface TaxWebSiteParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Web Site Name.
   * @nullable
   */
  webSiteName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxWebSiteParams.build]] instead.
 */
export function createTaxWebSiteParams(json: any): TaxWebSiteParams {
  return TaxWebSiteParams.build(json);
}

/**
 * TaxWebSiteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxWebSiteParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[TaxWebSiteParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxWebSiteParams.webSiteName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webSiteName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WebSiteName', this, 'Edm.String');
}

export namespace TaxWebSiteParams {
  export function build(json: { [keys: string]: FieldType }): TaxWebSiteParams {
    return createComplexType(json, {
      AbsEntry: (absEntry: number) => ({ absEntry: edmToTs(absEntry, 'Edm.Int32') }),
      WebSiteName: (webSiteName: string) => ({ webSiteName: edmToTs(webSiteName, 'Edm.String') })
    });
  }
}
