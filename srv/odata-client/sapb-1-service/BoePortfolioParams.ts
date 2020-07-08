/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BoePortfolioParams
 */
export interface BoePortfolioParams {
  /**
   * Portfolio Entry.
   * @nullable
   */
  portfolioEntry?: number;
  /**
   * Portfolio Id.
   * @nullable
   */
  portfolioId?: string;
  /**
   * Portfolio Code.
   * @nullable
   */
  portfolioCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BoePortfolioParams.build]] instead.
 */
export function createBoePortfolioParams(json: any): BoePortfolioParams {
  return BoePortfolioParams.build(json);
}

/**
 * BoePortfolioParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoePortfolioParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BoePortfolioParams.portfolioEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portfolioEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('PortfolioEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BoePortfolioParams.portfolioId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portfolioId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortfolioID', this, 'Edm.String');
  /**
   * Representation of the [[BoePortfolioParams.portfolioCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portfolioCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('PortfolioCode', this, 'Edm.String');
}

export namespace BoePortfolioParams {
  export function build(json: { [keys: string]: FieldType }): BoePortfolioParams {
    return createComplexType(json, {
      PortfolioEntry: (portfolioEntry: number) => ({ portfolioEntry: edmToTs(portfolioEntry, 'Edm.Int32') }),
      PortfolioID: (portfolioId: string) => ({ portfolioId: edmToTs(portfolioId, 'Edm.String') }),
      PortfolioCode: (portfolioCode: string) => ({ portfolioCode: edmToTs(portfolioCode, 'Edm.String') })
    });
  }
}
