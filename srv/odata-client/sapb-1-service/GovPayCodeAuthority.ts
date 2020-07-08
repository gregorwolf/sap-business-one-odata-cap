/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * GovPayCodeAuthority
 */
export interface GovPayCodeAuthority {
  /**
   * Abs Id.
   * @nullable
   */
  absId?: number;
  /**
   * Bpl Id.
   * @nullable
   */
  bplId?: number;
  /**
   * State.
   * @nullable
   */
  state?: string;
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[GovPayCodeAuthority.build]] instead.
 */
export function createGovPayCodeAuthority(json: any): GovPayCodeAuthority {
  return GovPayCodeAuthority.build(json);
}

/**
 * GovPayCodeAuthorityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GovPayCodeAuthorityField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GovPayCodeAuthority.absId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsId', this, 'Edm.Int32');
  /**
   * Representation of the [[GovPayCodeAuthority.bplId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BPLId', this, 'Edm.Int32');
  /**
   * Representation of the [[GovPayCodeAuthority.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[GovPayCodeAuthority.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
}

export namespace GovPayCodeAuthority {
  export function build(json: { [keys: string]: FieldType }): GovPayCodeAuthority {
    return createComplexType(json, {
      AbsId: (absId: number) => ({ absId: edmToTs(absId, 'Edm.Int32') }),
      BPLId: (bplId: number) => ({ bplId: edmToTs(bplId, 'Edm.Int32') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      CardCode: (cardCode: string) => ({ cardCode: edmToTs(cardCode, 'Edm.String') })
    });
  }
}
