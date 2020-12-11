/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class BoePortfolioParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoePortfolioParams> {
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

  /**
   * Creates an instance of BoePortfolioParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BoePortfolioParams);
  }
}

export namespace BoePortfolioParams {
  /**
   * Metadata information on all properties of the `BoePortfolioParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoePortfolioParams>[] = [{
    originalName: 'PortfolioEntry',
    name: 'portfolioEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PortfolioID',
    name: 'portfolioId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'PortfolioCode',
    name: 'portfolioCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BoePortfolioParams {
    return deserializeComplexTypeV4(json, BoePortfolioParams);
  }
}
