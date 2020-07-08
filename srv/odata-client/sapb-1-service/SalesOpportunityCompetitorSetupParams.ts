/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * SalesOpportunityCompetitorSetupParams
 */
export interface SalesOpportunityCompetitorSetupParams {
  /**
   * Sequence No.
   * @nullable
   */
  sequenceNo?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunityCompetitorSetupParams.build]] instead.
 */
export function createSalesOpportunityCompetitorSetupParams(json: any): SalesOpportunityCompetitorSetupParams {
  return SalesOpportunityCompetitorSetupParams.build(json);
}

/**
 * SalesOpportunityCompetitorSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SalesOpportunityCompetitorSetupParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SalesOpportunityCompetitorSetupParams.sequenceNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequenceNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SequenceNo', this, 'Edm.Int32');
  /**
   * Representation of the [[SalesOpportunityCompetitorSetupParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
}

export namespace SalesOpportunityCompetitorSetupParams {
  export function build(json: { [keys: string]: FieldType }): SalesOpportunityCompetitorSetupParams {
    return createComplexType(json, {
      SequenceNo: (sequenceNo: number) => ({ sequenceNo: edmToTs(sequenceNo, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
