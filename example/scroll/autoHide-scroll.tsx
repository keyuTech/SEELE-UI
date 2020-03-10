import React from 'react';
import Scroll from "../../lib/scroll/scroll";
import { useTranslation } from 'react-i18next';
import './scroll.scss';

const AutoHideScrollExample = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={"example"}>
                <h4 className={"scroll-title"}>
                    {t('autoHide_scroll')}
                </h4>
                <Scroll className={"scroll-example"} style={{height: 300}} autoHide={true}>
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                        <p>15</p>
                        <p>16</p>
                        <p>17</p>
                        <p>18</p>
                        <p>19</p>
                        <p>20</p>
                        <p>21</p>
                        <p>22</p>
                        <p>23</p>
                        <p>24</p>
                        <p>25</p>
                        <p>26</p>
                        <p>27</p>
                        <p>28</p>
                        <p>29</p>
                        <p>30</p>
                        <p>31</p>
                        <p>32</p>
                        <p>33</p>
                        <p>34</p>
                        <p>35</p>
                        <p>36</p>
                        <p>37</p>
                        <p>38</p>
                        <p>39</p>
                        <p>40</p>
                    </div>
                </Scroll>
            </div>
        </div>
    )
}

export default AutoHideScrollExample